import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

export const runtime = "nodejs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processed = await remark()
    .use(html)
    .process(content);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl neon-blue mb-4">
        {data?.title}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: processed.toString(),
        }}
      />
    </main>
  );
}