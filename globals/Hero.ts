import type { GlobalConfig } from 'payload'

export const HeroGlobal: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    group: 'Globals',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'nickname', type: 'text', required: true },
    { name: 'role', type: 'text', required: true, localized: true },
    { name: 'subtitle', type: 'textarea', required: true, localized: true },
    { name: 'ctaLabel', type: 'text', required: true, localized: true },
    { name: 'ctaTarget', type: 'text', required: true },
  ],
}
