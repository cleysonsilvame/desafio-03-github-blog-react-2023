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
