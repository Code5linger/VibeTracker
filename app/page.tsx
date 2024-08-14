import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? '/journal' : '/new-user';

  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">
          VibeTracker - The best AI Jurnal app, period.
        </h1>
        <p className="text-2xl text-white/60 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          harum, quis assumenda ab, dolorem aperiam distinctio fugiat dolorum
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
