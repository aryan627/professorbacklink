import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black gap-8 overflow-hidden">
      <h1 className="animate-rotate-in animate-white-glow text-6xl font-bold tracking-wider text-white uppercase">
        Professor Backlink
      </h1>

      <div className="animate-pop-in animate-sparkle">
        <div className="animate-wobble">
          <Image
            src="/professor-backlink.png"
            alt="Professor Backlink"
            width={400}
            height={400}
            priority
            className="rounded-lg"
          />
        </div>
      </div>

      <p className="animate-slide-up animate-bounce-crazy text-2xl text-white font-bold">
        Your Link Building Expert
      </p>
    </div>
  );
}
