import { ITasksStore } from './types'

export const getIsCreateModalOpen = (state: ITasksStore) =>
  state.generalUI.isCreateTaskModalOpen

export const getIsEditModalOpen = (state: ITasksStore) =>
  state.generalUI.isEditTaskModalOpen
