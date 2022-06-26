import React, { useCallback } from 'react'
import styles from './TaskItem.module.css'
import { ITask, ETasksActionTypes } from '../../features/tasks'
import { Icon } from '../Icon'
import { EIcons } from '../Icon/Icon'
import { getDate } from '../../utils'
import { useDispatch } from 'react-redux'
import { EGeneralUIActionTypes } from '../../features/generalUI'

interface IProps {
  task: ITask
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  const data = getDate(task.date)
  const dispatch = useDispatch()

  const handleDeleteItem = useCallback(() => {
    dispatch({ type: ETasksActionTypes.DELETE_TASK, taskId: task.id })
  }, [])

  const handleEditItem = useCallback(() => {
    dispatch({ type: ETasksActionTypes.SET_TASK_TO_EDIT, taskId: task.id })
    dispatch({
      type: EGeneralUIActionTypes.SET_IS_OPEN_EDIT_TASK_MODAL,
      payload: true,
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.worker}>{task.employeeName}</div>
      <div>{data}</div>
      <div>{task.status}</div>
      <span className={styles.buttons}>
        <Icon
          type={EIcons.Edit}
          onClick={handleEditItem}
          className={styles.icon}
        />
        <Icon
          type={EIcons.Trash}
          onClick={handleDeleteItem}
          className={styles.icon}
        />
      </span>
    </div>
  )
}
