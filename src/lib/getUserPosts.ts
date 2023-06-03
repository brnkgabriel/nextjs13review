export default async function getUserPosts(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)

  if (!res.ok) undefined

  return res.json()
}