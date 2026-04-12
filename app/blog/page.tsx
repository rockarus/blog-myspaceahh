import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const runtime = "nodejs";
export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "posts");

  if (!fs.existsSync(postsDirectory)) {
    return (
      <main className="text-white p-6">
        <p>Posts folder not found</p>
      </main>
    );
  }

  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith(".md"));

  const posts = files.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      slug: path.parse(file).name,
      title: data.title,
      date: data.date,
    };
  });

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold neon-blue mb-6">Blog</h1>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.slug} className="border border-cyan-400 p-4 rounded">
              <Link href={`/blog/${post.slug}`} className="text-xl neon-blue underline">
                {post.title}
              </Link>

              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}