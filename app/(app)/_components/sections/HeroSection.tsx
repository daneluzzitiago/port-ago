import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Hero } from '@/payload-types'

export async function HeroSection() {
  const payload = await getPayload({ config })
  const hero = (await payload.findGlobal({ slug: 'hero' })) as Hero

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-bg px-4 sm:px-8 md:px-16 lg:px-32 py-16 flex items-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[-20%] right-[-5%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(95,0,186,0.16) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-14">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl font-normal text-white leading-tight tracking-tight">
            {"Hello, I'm "}
            <span className="font-bold text-purple-lightest">{hero.name}</span>
            {", but you can call me "}
            <span className="font-bold text-purple-lightest">{hero.nickname}</span>
          </h1>

          <div className="flex flex-col gap-1">
            <p className="text-xl md:text-2xl text-gray-light leading-relaxed">
              {"I'm a "}
              <span className="font-bold text-accent">{hero.role}</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-light leading-relaxed">
              {hero.subtitle}
            </p>
          </div>

          <a
            href={hero.ctaTarget}
            className="self-start px-8 py-3 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
          >
            {hero.ctaLabel}
          </a>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/developer.svg"
            alt="Developer illustration"
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
