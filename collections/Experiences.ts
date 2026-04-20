import type { CollectionConfig } from 'payload'
import { toolOptions } from './shared/toolOptions'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'position', 'duration', 'order'],
  },
  fields: [
    { name: 'companyName', type: 'text', required: true },
    { name: 'companyDescription', type: 'text', required: true, localized: true },
    { name: 'position', type: 'text', required: true, localized: true },
    { name: 'description', type: 'textarea', localized: true },
    {
      name: 'tools',
      type: 'select',
      hasMany: true,
      options: [...toolOptions],
    },
    { name: 'duration', type: 'text', localized: true },
    { name: 'iconPath', type: 'text' },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: { description: 'Menor número aparece primeiro' },
    },
  ],
}
