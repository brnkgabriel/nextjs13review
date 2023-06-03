import React from 'react'

type Props = {
  params: {
    searchTerm: string
  }
}

export default function page(props: Props) {
  const { params: { searchTerm } } = props
  
  return (
    <div>page</div>
  )
}