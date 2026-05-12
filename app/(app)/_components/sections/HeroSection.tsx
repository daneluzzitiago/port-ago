import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Hero } from '@/payload-types'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'
import { BouncingArrow } from '../ui/BouncingArrow'
import type { getDict } from '../../i18n/dictionary'

type Props = {
  locale: string
  dict: ReturnType<typeof getDict>
}

export async function HeroSection({ locale, dict }: Props) {
  const payload = await getPayload({ config })
  const hero = (await payload.findGlobal({ slug: 'hero', locale: locale as 'pt' | 'en' })) as Hero

  return (
    <section
      id="hero"
      className="aurora-section relative min-h-screen py-16 flex items-center"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[-20%] right-[-5%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,213,255,0.2) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />

      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-14">
        <div className="flex flex-col gap-8">
          <Heading level={1} size="6xl" className="font-normal">
            {dict.hero.greeting}
            <span className="font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">{hero.name}</span>
            {dict.hero.butCall}
            <span className="font-bold bg-gradient-to-r from-secondary via-secondary-lighter to-primary bg-clip-text text-transparent">{hero.nickname}</span>
          </Heading>

          <Text size="xl" variant="strong">
            <span className="font-bold text-primary drop-shadow-[0_0_18px_rgba(247,201,72,0.22)]">{hero.role}</span>
          </Text>

          <div className="flex items-center gap-4 self-start">
            <a
              href="#degrees"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-full uppercase tracking-widest h-12 px-7 text-base bg-gradient-to-r from-primary via-primary-hover to-accent text-bg shadow-[0_10px_28px_rgba(247,201,72,0.22)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(247,201,72,0.32)]"
            >
              {hero.ctaLabel}
            </a>
            <BouncingArrow />
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* White circle glow behind image */}
          <div
            className="absolute w-[320px] h-[320px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(247,201,72,0.24) 0%, rgba(56,213,255,0.1) 42%, transparent 70%)',
              filter: 'blur(32px)',
            }}
            aria-hidden="true"
          />
          <Image
            src="/image.png"
            alt="Developer illustration"
            width={500}
            height={500}
            className="relative z-10 w-full max-w-[500px] h-auto"
            priority
          />
        </div>
      </Container>
    </section>
  )
}
