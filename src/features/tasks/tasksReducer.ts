/* eslint-disable @typescript-eslint/default-param-last */

import {
  ESortOptions,
  ITask,
  TasksActionTypes,
  ETasksActionTypes,
} from './types'
import { findTaskId } from '../../utils'

const initialState = {
  items: [],
  sortOption: ESortOptions.BY_DATE_INCREASING,
  filterBy: '',
  editingTask: {},
}

export const taskReducer = (state = initialState, action: TasksActionTypes) => {
  switch (action.type) {
    case ETasksActionTypes.SET_SORT_OPTION:
      return { ...state, sortOption: action.payload }
    case ETasksActionTypes.CREATE_TASK:
      return { ...state, items: [...state.items, action.task] }
    case ETasksActionTypes.SET_TASKS:
      return { ...state, items: [...action.tasks] }
    case ETasksActionTypes.SET_TASK_TO_EDIT:
      const editingTaskInd = findTaskId(action.taskId, state.items)
      return { ...state, editingTask: state.items[editingTaskInd] }
    case ETasksActionTypes.UPDATE_TASK:
      return {
        ...state,
        editingTask: {},
        items: state.items.map((task: ITask) =>
          task.id === action.task.id ? action.task : task
        ),
      }

    case ETasksActionTypes.DELETE_TASK:
      const deletedTaskInd = findTaskId(action.taskId, state.items)
      return {
        ...state,
        items: [
          ...state.items.slice(0, deletedTaskInd),
          ...state.items.slice(deletedTaskInd + 1),
        ],
      }
    default:
      return state
  }
}
