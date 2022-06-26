import React, { useCallback, useState } from 'react'
import styles from './CreateTaskForm.module.css'
import { Input } from '../Input'
import { useDispatch } from 'react-redux'
import { ETaskStatuses, ETasksActionTypes } from '../../features/tasks'
import { SubmitButton } from '../SubmitButton'

interface IProps {
  closeCallback: () => void
}

export const CreateTaskForm: React.FC<IProps> = (props) => {
  const { closeCallback } = props
  const dispatch = useDispatch()
  const [employeeName, setEmployeeName] = useState('')
  const [title, setTitle] = useState('')
  const handleTitleChange = useCallback(
    (value) => {
      setTitle(value)
    },
    [setTitle]
  )
  const handleEmployeeNameChange = useCallback(
    (name: string) => {
      setEmployeeName(name)
    },
    [setEmployeeName]
  )

  const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({
      type: ETasksActionTypes.CREATE_TASK,
      task: {
        employeeName,
        title,
        date: new Date(),
        id: Date.now(),
        status: ETaskStatuses.CREATED,
      },
    })
    setEmployeeName('')
    setTitle('')
    closeCallback()
  }
  return (
    <form className={styles.container}>
      <div className={styles.field}>
        <span>Title:</span>
        <Input onChange={handleTitleChange} value={title} />
      </div>
      <div className={styles.field}>
        <span>Employee name:</span>
        <Input onChange={handleEmployeeNameChange} value={employeeName} />
      </div>
      <SubmitButton callback={handleSubmit} />
    </form>
  )
}
