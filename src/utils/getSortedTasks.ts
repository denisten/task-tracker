import { ESortOptions, ETaskStatuses, ITask } from '../features/tasks'

export const getSortedTasks = (
  sortOption: ESortOptions,
  tasks: ITask[]
): ITask[] => {
  switch (sortOption) {
    case ESortOptions.BY_DATE_DECREASING:
      return tasks.sort((a, b) => b.date.getTime() - a.date.getTime())
    case ESortOptions.BY_DATE_INCREASING:
      return tasks.sort((a, b) => a.date.getTime() - b.date.getTime())
    case ESortOptions.BY_STATUS_CREATED_FIRST:
      return tasks.sort((a, b) => {
        if (a.status == ETaskStatuses.CREATED && b.status !== a.status)
          return -1
        else return 1
      })
    case ESortOptions.BY_STATUS_DONE_FIRST:
      return tasks.sort((a, b) => {
        if (a.status == ETaskStatuses.DONE && b.status !== a.status) return -1
        else return 1
      })
    default:
      return tasks
  }
}
