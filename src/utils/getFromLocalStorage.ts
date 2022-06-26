import { localStorage } from './localStorage'

export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}
