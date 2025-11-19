import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function PortfolioPage({ works }) {
  return (
    <div>
      <h1>Портфоліо робіт</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works.map((item) => (
          <li key={item.slug} className="border rounded p-4">
            <a href={`/portfolio/${item.slug}`}>
              {item.image && (
                <img
                  src={`/uploads/${item.image}`}
                  alt={item.title}
                  width={400}
                  height={300}
                />
              )}
              <h2>{item.title}</h2>
              <p>{item.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const portfolioDir = path.join(process.cwd(), "content/portfolio");
  const filenames = fs.readdirSync(portfolioDir);

  const works = filenames.map((filename) => {
    const filePath = path.join(portfolioDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(".md", ""),
    };
  });

  return {
    props: {
      works,
    },
  };
}
