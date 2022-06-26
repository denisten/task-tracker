/* eslint-disable @typescript-eslint/default-param-last */

import { GeneralUIActionTypes, EGeneralUIActionTypes } from './types'

const initialState = {
  isCreateTaskModalOpen: false,
  isEditTaskModalOpen: false,
}

export const generalUIReducer = (
  state = initialState,
  action: GeneralUIActionTypes
) => {
  switch (action.type) {
    case EGeneralUIActionTypes.SET_IS_OPEN_CREATE_TASK_MODAL:
      return { ...state, isCreateTaskModalOpen: action.payload }
    case EGeneralUIActionTypes.SET_IS_OPEN_EDIT_TASK_MODAL:
      return { ...state, isEditTaskModalOpen: action.payload }
    default:
      return state
  }
}
