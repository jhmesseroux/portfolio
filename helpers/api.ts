const REVALIDATE = 86400

export async function fetchAPI<T>(path: string): Promise<T> {
  const res = await fetch(process.env.API_URL + path, {
    next: { revalidate: REVALIDATE }
  })

  if (!res.ok) {
    const error = new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`)
    error.name = 'CONNECTION_ERROR'
    throw error
  }

  const data = await res.json()

  if (data.ok === false) {
    const error = new Error(data.message || `API error on ${path}`)
    error.name = 'API_ERROR'
    throw error
  }

  return data as T
}
