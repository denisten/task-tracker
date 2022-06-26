import { ITask } from '../features/tasks'

export const findTaskId = (id: number, array: ITask[]) => {
  return array.findIndex((task) => task.id == id)
}
