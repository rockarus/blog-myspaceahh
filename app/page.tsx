import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center p-6">
      
      <div className="w-full max-w-4xl border border-cyan-400 shadow-[0_0_30px_#00ffff]">
        
        {/* Header */}
        <div className="p-6 border-b border-cyan-400">
          <h1 className="text-5xl font-bold neon-blue">
            Rockarus' Myspace
          </h1>
          <p className="text-sm mt-2 text-gray-400">
            Redemption when?
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* About */}
          <div className="border border-pink-500 p-4 shadow-[0_0_20px_#ff00ff]">
            <h2 className="text-xl font-bold neon-pink mb-2">
              About Me
            </h2>
            <p>
              I am not hiding in the shadows. I am the shadows, and class is a torch.
            </p>
          </div>

          {/* Blog */}
          <div className="border border-yellow-400 p-4 shadow-[0_0_20px_#ffff33]">
            <h2 className="text-xl font-bold neon-yellow mb-2">
              Blog Posts
            </h2>
            <p className="mb-2">
              Call me Ramsay the way my steak is gor-done.
            </p>

            {/* LINK ADDED HERE */}
            <Link
              href="/blog"
              className="text-cyan-400 underline"
            >
              → Enter Blog
            </Link>
          </div>

          {/* Terminal */}
          <div className="bg-black border border-green-400 p-4 shadow-[0_0_20px_#00ff00] font-mono text-green-400">
            <p>&gt; Jarvis says hello</p>
          </div>

        </div>

      </div>
    </main>
  );
}