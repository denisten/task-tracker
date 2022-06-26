import { ITasksStore } from './types'

export const getTasks = (state: ITasksStore) => state.tasks.items
export const getEditingTask = (state: ITasksStore) => state.tasks.editingTask
export const getSortOption = (state: ITasksStore) => state.tasks.sortOption
