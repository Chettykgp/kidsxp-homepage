export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-blue-500 text-white p-6">
        <h1 className="text-3xl font-bold">KidsXP</h1>
        <p className="mt-2">Turn everyday moments into lifelong achievements.</p>
      </header>
      <main className="p-6">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create your kids’ profiles</li>
            <li>Log real-life experiences</li>
            <li>Earn XP and unlock achievements</li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">XP Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-yellow-100 rounded">🧗 Adventure</div>
            <div className="p-4 bg-green-100 rounded">🎨 Creative</div>
            <div className="p-4 bg-purple-100 rounded">🧠 Skill</div>
            <div className="p-4 bg-pink-100 rounded">💛 Bravery</div>
            <div className="p-4 bg-blue-100 rounded">🤝 Social</div>
            <div className="p-4 bg-gray-100 rounded">🔍 Curiosity</div>
          </div>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 p-4">
        © 2025 KidsXP. All rights reserved.
      </footer>
    </div>
  );
}