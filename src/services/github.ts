import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

export interface GetUserResponse {
  id: number
  avatar_url: string
  html_url: string
  login: string
  name: string
  company: string
  bio: string
  following: number
  created_at: string
}

export async function getUser(
  username: string,
  options?: { signal?: AbortSignal },
) {
  const { data } = await api.get<GetUserResponse>(`/users/${username}`, {
    ...options,
  })

  return data
}

export interface Item {
  id: number
  number: number
  title: string
  created_at: string
  body: string
  html_url: string
  user: {
    login: string
  }
  comments: number
}

export interface SearchIssuesResponse {
  total_count: number
  incomplete_results: boolean
  items: Item[]
}

export async function searchIssues(
  username: string,
  repo: string,
  search = '',
  options?: { signal?: AbortSignal },
) {
  const { data } = await api.get<SearchIssuesResponse>('/search/issues', {
    ...options,
    params: {
      q: `${search} repo:${username}/${repo}`,
    },
  })

  return data
}

export async function getIssueByNumber(
  username: string,
  repo: string,
  number: number,
  options?: { signal?: AbortSignal },
) {
  const { data } = await api.get<Item>(
    `/repos/${username}/${repo}/issues/${number}`,
    {
      ...options,
    },
  )

  return data
}
