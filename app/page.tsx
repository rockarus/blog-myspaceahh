import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-200 flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white border-4 border-blue-600 p-4">
        
        <h1 className="text-3xl font-bold text-blue-700">
          Rockarus' Myspace
        </h1>

        <p className="text-sm text-gray-600 mb-4">
          Mood: Coding | Listening to: Nothing
        </p>

        <div className="bg-blue-100 border border-blue-400 p-3 mb-4">
          <h2 className="font-bold">About Me</h2>
          <p>I fly too close to the sun (and build websites).</p>
        </div>

        <div className="bg-blue-100 border border-blue-400 p-3">
          <h2 className="font-bold">Blog Posts</h2>
          <p>No posts yet.</p>
        </div>

      </div>
    </main>
  );
}