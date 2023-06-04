import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Users'
}

export default async function Users() {
  const usersData: Promise<iUser[]> = getAllUsers()

  const users = await usersData

  const content = (
    <section>
      <h2>
        <Link href='/'>Back to Home</Link>
        <br/>
        {
          users.map(user => {
            return (
              <>
                <p key={user.id}>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
                <br/>
              </>
            )
          })
        }
      </h2>
    </section>
  )
  return content
}
