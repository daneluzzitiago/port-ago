import type { CollectionConfig } from 'payload'
import { toolOptions } from './shared/toolOptions'

const isValidUrl = (value: string | null | undefined): true | string => {
  if (!value) return true
  try {
    const url = new URL(value)
    if (!['http:', 'https:'].includes(url.protocol)) {
      return 'Only http and https URLs are allowed'
    }
    return true
  } catch {
    return 'Invalid URL format'
  }
}

export const ProjectsCollection: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'isWorkInProgress', 'order'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true, localized: true },
    { name: 'githubUrl', type: 'text', validate: isValidUrl },
    { name: 'projectUrl', type: 'text', validate: isValidUrl },
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
