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
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold neon-blue mb-8">
          {data?.title}
        </h1>

        {/* Post content */}
        <article
          className="
            text-gray-200
            leading-7

            [&_p]:mb-6

            [&_h1]:text-3xl
            [&_h1]:font-bold
            [&_h1]:mb-6

            [&_h2]:text-2xl
            [&_h2]:font-bold
            [&_h2]:mb-4
            [&_h2]:mt-8

            [&_h3]:text-xl
            [&_h3]:font-bold
            [&_h3]:mb-3
            [&_h3]:mt-6

            [&_ul]:list-disc
            [&_ul]:ml-6
            [&_ul]:mb-6

            [&_ol]:list-decimal
            [&_ol]:ml-6
            [&_ol]:mb-6

            [&_li]:mb-2

            [&_blockquote]:border-l-2
            [&_blockquote]:border-cyan-400
            [&_blockquote]:pl-4
            [&_blockquote]:my-6

            [&_a]:text-cyan-400
            [&_a]:underline

            [&_strong]:font-bold
          "
          dangerouslySetInnerHTML={{
            __html: processed.toString(),
          }}
        />

      </div>
    </main>
  );
}