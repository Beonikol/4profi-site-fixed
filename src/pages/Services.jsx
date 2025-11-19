import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function ServicesPage({ services }) {
  return (
    <div>
      <h1>Види послуг</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item) => (
          <li key={item.slug} className="border rounded p-4">
            <a href={`/services/${item.slug}`}>
              {item.image && (
                <img
                  src={`/uploads/${item.image}`}
                  alt={item.title}
                  width={400}
                  height={300}
                />
              )}
              <h2>{item.title}</h2>
              <p>{item.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const servicesDir = path.join(process.cwd(), "content/services");
  const filenames = fs.readdirSync(servicesDir);

  const services = filenames.map((filename) => {
    const filePath = path.join(servicesDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(".md", ""),
    };
  });

  return {
    props: {
      services,
    },
  };
}
