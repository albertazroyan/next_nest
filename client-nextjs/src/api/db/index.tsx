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
        .then(({ status }) => {
          if (status === 0) resolve(status)
          else resolve({ status: 404 })
        }).catch((onRejected: any) => console.warn('Server failed' , query, onRejected))
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