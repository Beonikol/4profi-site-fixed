import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";

export default function PortfolioDetail({ work }) {
  const router = useRouter();

  if (!work) return <p>Завантаження...</p>;

  return (
    <div className="p-4">
      <button onClick={() => router.back()} className="underline mb-4 block">
        ← Назад
      </button>

      <h1 className="text-2xl font-bold">{work.title}</h1>
      {work.image && (
        <img
          src={`/uploads/${work.image}`}
          alt={work.title}
          width={600}
          height={400}
          className="my-4"
        />
      )}
      <p className="text-gray-700">{work.description}</p>
      <p className="text-sm mt-2 text-gray-500">Категорія: {work.category}</p>
      <p className="text-sm mt-1 text-gray-400">Дата: {work.date}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const portfolioDir = path.join(process.cwd(), "content/portfolio");
  const filenames = fs.readdirSync(portfolioDir);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/portfolio",
    `${params.slug}.md`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    props: {
      work: data,
    },
  };
}
