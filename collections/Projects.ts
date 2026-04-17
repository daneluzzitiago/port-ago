import type { CollectionConfig } from 'payload'
import { toolOptions } from './shared/toolOptions'

export const ProjectsCollection: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'isWorkInProgress', 'order'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'githubUrl', type: 'text' },
    { name: 'projectUrl', type: 'text' },
    {
      name: 'tools',
      type: 'select',
      hasMany: true,
      options: [...toolOptions],
    },
    { name: 'isWorkInProgress', type: 'checkbox', defaultValue: false },
    { name: 'imgPath', type: 'text' },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: { description: 'Menor número aparece primeiro' },
    },
  ],
}
