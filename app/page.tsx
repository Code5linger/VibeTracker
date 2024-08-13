import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">
          VibeTracker - The best AI Jurnal app, period.
        </h1>
        <p className="text-2xl text-white/60 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          harum, quis assumenda ab, dolorem aperiam distinctio fugiat dolorum
          asperiores architecto, voluptatibus quaerat. Culpa nam cupiditate
          distinctio voluptatum enim hic voluptates!
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
