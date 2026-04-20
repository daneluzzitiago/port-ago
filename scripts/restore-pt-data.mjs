/**
 * Restores Portuguese (pt) locale data after Payload localization migration.
 * Run with: node scripts/restore-pt-data.mjs
 */
import { createClient } from '@libsql/client'

const db = createClient({ url: 'file:port-ago.db' })
const backup = createClient({ url: 'file:port-ago.db.bak' })

async function getColumns(tableName) {
  const safeName = tableName.replace(/[^a-zA-Z0-9_]/g, '')
  const result = await db.execute(`PRAGMA table_info(${safeName})`)
  return result.rows.map((r) => r.name)
}

async function run() {
  console.log('🔄 Restoring PT locale data from backup...\n')

  // --- DEGREES ---
  const degreeCols = await getColumns('degrees')
  console.log('degrees columns:', degreeCols.filter(c => c.includes('course') || c.includes('description')))

  const degrees = await backup.execute('SELECT id, course, description FROM degrees')
  for (const row of degrees.rows) {
    await db.execute({
      sql: `UPDATE degrees SET course_pt = ?, description_pt = ? WHERE id = ?`,
      args: [row.course, row.description, row.id],
    })
    console.log(`  ✓ degree ${row.id}: ${row.course}`)
  }

  // --- EXPERIENCES ---
  const expCols = await getColumns('experiences')
  console.log('\nexperiences columns:', expCols.filter(c => c.includes('position') || c.includes('description') || c.includes('company_desc')))

  const experiences = await backup.execute(
    'SELECT id, company_description, position, description FROM experiences',
  )
  for (const row of experiences.rows) {
    await db.execute({
      sql: `UPDATE experiences SET company_description_pt = ?, position_pt = ?, description_pt = ? WHERE id = ?`,
      args: [row.company_description, row.position, row.description, row.id],
    })
    console.log(`  ✓ experience ${row.id}: ${row.position}`)
  }

  // --- PROJECTS ---
  const projCols = await getColumns('projects')
  console.log('\nprojects columns:', projCols.filter(c => c.includes('description')))

  const projects = await backup.execute('SELECT id, description FROM projects')
  for (const row of projects.rows) {
    await db.execute({
      sql: `UPDATE projects SET description_pt = ? WHERE id = ?`,
      args: [row.description, row.id],
    })
    console.log(`  ✓ project ${row.id}`)
  }

  // --- HERO ---
  const heroCols = await getColumns('hero')
  console.log('\nhero columns:', heroCols.filter(c => c.includes('role') || c.includes('subtitle') || c.includes('cta_label')))

  const hero = await backup.execute('SELECT id, role, subtitle, cta_label FROM hero')
  for (const row of hero.rows) {
    await db.execute({
      sql: `UPDATE hero SET role_pt = ?, subtitle_pt = ?, cta_label_pt = ? WHERE id = ?`,
      args: [row.role, row.subtitle, row.cta_label, row.id],
    })
    console.log(`  ✓ hero ${row.id}: ${row.role}`)
  }

  console.log('\n✅ PT data restored successfully!')
  console.log('💡 Open Payload Admin to add EN translations for each record.')
}

run().catch((err) => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
