/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DbProviderInterface,
  FetchData,
  ProviderDbInterface
} from './types'

import { databasePath, serverPath } from '@/configs/global'
import { Book } from '@/custom-types'
export class DbProvider implements DbProviderInterface {
  private provider: ProviderDbInterface
  name: string

  constructor (databasePath: string) {
    this.provider = {
      db: databasePath
    }
    this.name = databasePath
  }
  
  get (query: string): Promise<Book | { status: number }> {
    return new Promise((resolve) => {
      fetch(serverPath + '/' + this.getDbName() + '/' + query)
        .then(res => res.json() as Promise<FetchData>)
        .then(({ msg, data }) => {
          if (msg === 'ok') resolve(data)
          else resolve({ status: 404 })
        }).catch((onRejected: any) => console.warn('Server failed' , query, onRejected))
    })
  }

  put (doc: Book): Promise<Book> {
    return new Promise((resolve) => {
      fetch(serverPath + this.getDbName(), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(doc)
      }).then((res) => {
        resolve(res.json())
      })
    })
  }
  
  private getDbName (): string {
    return this.getDbNameFromUrl(this.provider.db)
  }
  
  private getDbNameFromUrl (url: string): string {
    return url.replace(databasePath, '')
  }
  
}
  
export default DbProvider