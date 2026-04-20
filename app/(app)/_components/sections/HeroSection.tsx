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
      className="relative min-h-screen bg-bg py-16 flex items-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[-20%] right-[-5%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />

      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-14">
        <div className="flex flex-col gap-8">
          <Heading level={1} size="6xl" className="font-normal">
            {dict.hero.greeting}
            <span className="font-bold text-primary-lightest">{hero.name}</span>
            {dict.hero.butCall}
            <span className="font-bold text-primary-lightest">{hero.nickname}</span>
          </Heading>

          <Text size="xl" variant="strong">
            <span className="font-bold text-accent">{hero.role}</span>
          </Text>

          <div className="flex items-center gap-4 self-start">
            <a
              href="#degrees"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-colors rounded-full uppercase tracking-widest h-12 px-7 text-base bg-transparent text-primary-light border border-primary-light/30 hover:bg-primary-light/10 hover:text-primary-lighter"
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
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
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
