type GithubRepo = {
  owner: string
  repo: string
}

type GithubCommitResponse = {
  sha: string
  html_url: string
  commit: {
    message: string
    committer: {
      date: string
      name?: string | null
    }
  }
}

export type GithubLatestCommit =
  | {
      status: 'available'
      shortSha: string
      message: string
      url: string
      committedAt: string
      authorName?: string
    }
  | {
      status: 'unavailable'
      reason: string
    }

export async function getLatestGithubCommit(githubUrl: string): Promise<GithubLatestCommit> {
  const repo = getGithubRepo(githubUrl)

  if (!repo) {
    return unavailable('GitHub URL does not point to a repository.')
  }

  const response = await fetch(
    `https://api.github.com/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.repo)}/commits?per_page=1`,
    {
      headers: getGithubHeaders(),
      next: { revalidate: 60 * 60 },
    },
  )

  if (!response.ok) {
    return unavailable(`GitHub returned ${response.status} while fetching commits.`)
  }

  const payload: unknown = await response.json()
  const commit = readLatestCommit(payload)

  return commit ?? unavailable('GitHub did not return commit data in the expected format.')
}

function getGithubRepo(githubUrl: string): GithubRepo | null {
  const url = parseUrl(githubUrl)

  if (!url || getGithubHost(url.hostname) !== 'github.com') {
    return null
  }

  const [owner, repoSegment] = url.pathname.split('/').filter(Boolean)
  const repo = repoSegment?.replace(/\.git$/, '')

  if (!owner || !repo) {
    return null
  }

  return { owner, repo }
}

function parseUrl(value: string): URL | null {
  try {
    return new URL(value)
  } catch {
    return null
  }
}

function getGithubHost(hostname: string): string {
  return hostname.toLowerCase().replace(/^www\./, '')
}

function getGithubHeaders(): Record<string, string> {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  const token = process.env.GITHUB_TOKEN

  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers
}

function readLatestCommit(payload: unknown): GithubLatestCommit | null {
  if (!Array.isArray(payload) || payload.length === 0) {
    return null
  }

  const [latestCommit] = payload

  if (!isGithubCommitResponse(latestCommit)) {
    return null
  }

  const { sha, html_url: url, commit } = latestCommit
  const authorName = commit.committer.name ?? undefined

  return {
    status: 'available',
    shortSha: sha.slice(0, 7),
    message: getFirstLine(commit.message),
    url,
    committedAt: commit.committer.date,
    ...(authorName ? { authorName } : {}),
  }
}

function isGithubCommitResponse(value: unknown): value is GithubCommitResponse {
  if (!isRecord(value)) {
    return false
  }

  const commit = value.commit

  if (!isRecord(commit)) {
    return false
  }

  const committer = commit.committer

  return (
    typeof value.sha === 'string' &&
    typeof value.html_url === 'string' &&
    typeof commit.message === 'string' &&
    isRecord(committer) &&
    typeof committer.date === 'string' &&
    (typeof committer.name === 'string' || committer.name === null || committer.name === undefined)
  )
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function getFirstLine(message: string): string {
  return message.split(/\r?\n/, 1)[0] || message
}

function unavailable(reason: string): GithubLatestCommit {
  return { status: 'unavailable', reason }
}
