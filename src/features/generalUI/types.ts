interface OpenCreateTaskModalAction {
  type: EGeneralUIActionTypes.SET_IS_OPEN_CREATE_TASK_MODAL
  payload: boolean
}

interface OpenEditTaskModalAction {
  type: EGeneralUIActionTypes.SET_IS_OPEN_EDIT_TASK_MODAL
  payload: boolean
}

export type GeneralUIActionTypes =
  | OpenCreateTaskModalAction
  | OpenEditTaskModalAction

export enum EGeneralUIActionTypes {
  SET_IS_OPEN_CREATE_TASK_MODAL = 'SET_IS_OPEN_CREATE_TASK_MODAL',
  SET_IS_OPEN_EDIT_TASK_MODAL = 'SET_IS_OPEN_EDIT_TASK_MODAL',
}

export interface ITasksStore {
  generalUI: {
    isCreateTaskModalOpen: boolean
    isEditTaskModalOpen: boolean
  }
}
