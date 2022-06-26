export enum ETaskStatuses {
  CREATED = 'CREATED',
  DONE = 'DONE',
}

export enum ETasksActionTypes {
  CREATE_TASK = 'CREATE_TASK',
  SET_TASKS = 'SET_TASKS',
  DELETE_TASK = 'DELETE_TASK',
  SET_FILTER = 'SET_FILTER',
  UPDATE_TASK = 'UPDATE_TASK',
  SET_TASK_TO_EDIT = 'SET_TASK_TO_EDIT',
  SET_SORT_OPTION = 'SET_SORT_OPTION',
}

export enum ESortOptions {
  BY_DATE_INCREASING = 'BY_DATE_INCREASING',
  BY_DATE_DECREASING = 'BY_DATE_DECREASING',
  BY_STATUS_DONE_FIRST = 'BY_STATUS_DONE_FIRST',
  BY_STATUS_CREATED_FIRST = 'BY_STATUS_CREATED_FIRST',
}

export interface ITask {
  id: number
  title: string
  employeeName: string
  date: Date
  status: ETaskStatuses
}

interface SetFilterAction {
  type: ETasksActionTypes.SET_FILTER
}

interface EditTaskAction {
  type: ETasksActionTypes.UPDATE_TASK
  task: ITask
}

interface SetTaskToEdit {
  type: ETasksActionTypes.SET_TASK_TO_EDIT
  taskId: number
}

interface CreateTaskAction {
  type: ETasksActionTypes.CREATE_TASK
  task: ITask
}

interface SetSortOptionAction {
  type: ETasksActionTypes.SET_SORT_OPTION
  payload: ESortOptions
}

interface DeleteTaskAction {
  type: ETasksActionTypes.DELETE_TASK
  taskId: number
}

interface SetTasksAction {
  type: ETasksActionTypes.SET_TASKS
  tasks: ITask[]
}

export type TasksActionTypes =
  | SetFilterAction
  | CreateTaskAction
  | DeleteTaskAction
  | SetTasksAction
  | SetTaskToEdit
  | EditTaskAction
  | SetSortOptionAction

export interface ITasksStore {
  tasks: {
    items: ITask[]
    sortOption: ESortOptions
    filterBy: string
    editingTask: ITask
  }
}
