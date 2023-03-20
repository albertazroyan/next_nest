import { Book } from '@/custom-types'

export interface DbProviderInterface {
  get: (query: string) => Promise<Book | { status: number }>
  name: string
}

export interface ProviderDbInterface {
  db: DbProviderInterface.Socket<Book>
}

export interface FetchReferenc {
  msg: string
  data: number
}

export interface FetchData {
  status: number
}
