import { localStorage } from './localStorage'
import { ITask } from '../features/tasks'

export const setToLocalStorage = (key: string, data: ITask[]) => {
  localStorage.setItem(key, JSON.stringify(data))
}
