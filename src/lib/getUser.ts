export default async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  // const res = await fetch('https://jsonplaceholder.typicode.com/users/1')

  if (!res.ok) return undefined

  return res.json()
}