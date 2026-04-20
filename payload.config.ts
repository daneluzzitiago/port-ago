import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Degrees } from './collections/Degrees'
import { Experiences } from './collections/Experiences'
import { Media } from './collections/Media'
import { ProjectsCollection } from './collections/Projects'
import { Users } from './collections/Users'
import { HeroGlobal } from './globals/Hero'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Skip validation during `next build` — env vars are only needed at runtime.
// At runtime (dev server or Vercel deployment), the check still runs.
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build'

if (!isBuildPhase) {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET environment variable is required')
  }
  if (!process.env.DATABASE_URI) {
    throw new Error('DATABASE_URI environment variable is required')
  }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      { label: 'Português', code: 'pt' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'pt',
    fallback: true,
  },
  collections: [Users, Media, Degrees, Experiences, ProjectsCollection],
  globals: [HeroGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI ?? '',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
  cors: [siteUrl],
  csrf: [siteUrl],
  graphQL: {
    disableIntrospectionInProduction: true,
    disablePlaygroundInProduction: true,
  },
})
