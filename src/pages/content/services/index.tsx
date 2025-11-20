import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'src/pages/content/services')
  const files = fs.readdirSync(dir)

  const services = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      slug: filename.replace('.md', ''),
      ...data,
    }
  })

  return {
    props: {
      services,
    },
  }
}

export default function ServicesPage({ services }: { services: any[] }) {
  return (
    <div>
      <h1>Наші Послуги</h1>
      <ul>
        {services.map((service) => (
          <li key={service.slug}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
