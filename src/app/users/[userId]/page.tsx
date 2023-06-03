import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

type Props = {
  params: {
    userId: string;
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params: { userId } } = props
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of: ${user.name}`
  }
}

export default async function User(props: Props) {
  const { params: { userId } } = props
  const userData: Promise<User> = getUser(userId)
  const postData: Promise<Post[]> = getUserPosts(userId)

  const [ user, posts ] = await Promise.all([ userData, postData ]) 
  return <>
    <h2>{ user.name }</h2>
    <br/>
    <Suspense fallback={<h2>Loading...</h2>}>
      <UserPosts posts={posts} />
    </Suspense>
  </>
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData
  return users.map(user => (
    { userId: user.id.toString() }
  ))
}