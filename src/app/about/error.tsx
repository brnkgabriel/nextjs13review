'use client'

import Link from "next/link"
import { useEffect } from "react"


export default function Error({ error, reset }: iError) {
  useEffect(() => {
    // log the error to an error reporting service
    console.error(error)
  }, [ error ])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>
        <Link href={"/"}>Back Home</Link>
      </button>
    </div>
  )
}