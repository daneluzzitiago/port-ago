import { WorkbenchSite } from './_components/workbench/WorkbenchSite'
import { getPortfolioData } from './_components/workbench/getPortfolioData'
import { getLocale } from './i18n/server'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const locale = await getLocale()
  const data = await getPortfolioData(locale)

  return <WorkbenchSite data={data} />
}
