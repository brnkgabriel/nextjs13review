interface iUser {
  id: string,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string
    bs: string,
  }
}

interface iError {
  error: Error,
  reset: () => void
}

interface iPost {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface iResult {
  pageid: string,
  title: string,
  extract: string,
  thumbnail?: {
    source: string,
    width: number,
    height: number
  }
}

interface iSearchResult {
  query?: {
    pages?: iResult[]
  }
}

interface iSearchResult {
  query?: {
    pages?: iResult[]
  }
}