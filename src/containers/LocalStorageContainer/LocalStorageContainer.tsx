import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITask, selectors, ETasksActionTypes } from '../../features/tasks'
import { getFromLocalStorage, setToLocalStorage } from '../../utils'

interface IProps {
  children: React.ReactNode
}
const TASK_KEY = 'TASK_KEY'

export const LocalStorageContainer: React.FC<IProps> = ({ children }) => {
  const tasksFromStore = useSelector(selectors.getTasks)
  const dispatch = useDispatch()
  const isFirstRender = useRef(true)

  useEffect(() => {
    isFirstRender.current = false
    const dataFromLS = getFromLocalStorage(TASK_KEY)
    const parsedData = dataFromLS ? JSON.parse(dataFromLS) : []
    const parsedTasks = parsedData.map((task: ITask) => ({
      employeeName: task.employeeName,
      title: task.title,
      date: new Date(task.date),
      status: task.status,
      id: task.id,
    }))
    dispatch({
      type: ETasksActionTypes.SET_TASKS,
      tasks: parsedTasks,
    })
  }, [])

  useEffect(() => {
    if (!isFirstRender.current) {
      setToLocalStorage(TASK_KEY, tasksFromStore)
    }
  }, [JSON.stringify(tasksFromStore), isFirstRender.current])
  return <>{children}</>
}
