import type { GlobalConfig } from 'payload'

export const HeroGlobal: GlobalConfig = {
  slug: 'hero',
  admin: {
    group: 'Globals',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'nickname', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea', required: true },
    { name: 'ctaLabel', type: 'text', required: true },
    { name: 'ctaTarget', type: 'text', required: true },
  ],
}
