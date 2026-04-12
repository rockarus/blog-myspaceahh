import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-4 font-sans">
      
      {/* Main Container */}
      <div className="max-w-5xl mx-auto border-4 border-blue-700 bg-white shadow-xl">

        {/* Top Bar */}
        <div className="bg-blue-700 text-white p-4">
          <h1 className="text-4xl font-bold">Rockarus' Myspace</h1>
          <p className="text-sm">Mood: Redemption when???</p>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row">

          {/* Sidebar */}
          <div className="md:w-1/3 bg-blue-100 border-r-2 border-blue-400 p-4">
            
            {/* Profile */}
            <div className="border border-blue-500 bg-white p-3 mb-4">
              <h2 className="font-bold text-blue-700 mb-2">Profile</h2>
              <img
                src="https://via.placeholder.com/150"
                className="mb-2 border"
              />
              <p><strong>Name:</strong> Rockarus</p>
              <p><strong>Status:</strong> Online</p>
              <p><strong>Location:</strong> Internet</p>
            </div>

            {/* Top Friends */}
            <div className="border border-blue-500 bg-white p-3">
              <h2 className="font-bold text-blue-700 mb-2">Top Friends</h2>
              <ul className="space-y-1">
                <li>🔥 Icarus</li>
                <li>⚡ Chaos</li>
                <li>🌙 Night</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-2/3 p-4 space-y-4">

            {/* About */}
            <div className="border border-blue-500 bg-blue-50 p-3">
              <h2 className="font-bold text-blue-700 mb-1">About Me</h2>
              <p>
                I build things, break things, and occasionally fly too close to
                the sun.
              </p>
            </div>

            {/* Blog */}
            <div className="border border-blue-500 bg-blue-50 p-3">
              <h2 className="font-bold text-blue-700 mb-1">Blog Posts</h2>
              <p>No posts yet... but chaos is coming.</p>
            </div>

            {/* Comments */}
            <div className="border border-blue-500 bg-blue-50 p-3">
              <h2 className="font-bold text-blue-700 mb-2">Comments</h2>
              <div className="space-y-2 text-sm">
                <p><strong>User1:</strong> This page is 🔥</p>
                <p><strong>User2:</strong> Peak MySpace energy</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}