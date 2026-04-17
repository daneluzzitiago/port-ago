import type { CollectionConfig } from 'payload'

export const Degrees: CollectionConfig = {
  slug: 'degrees',
  admin: {
    useAsTitle: 'course',
    defaultColumns: ['course', 'institution', 'order'],
  },
  fields: [
    { name: 'institution', type: 'text', required: true },
    { name: 'course', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: { description: 'Menor número aparece primeiro' },
    },
  ],
}
