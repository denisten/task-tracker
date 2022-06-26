import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ETaskStatuses,
  selectors,
  ETasksActionTypes,
} from '../../features/tasks'
import styles from './EditTaskForm.module.css'
import { Input } from '../Input'
import Select from 'react-select'
import { SubmitButton } from '../SubmitButton'

interface IProps {
  closeCallback: () => void
}
interface IStatusState {
  value: ETaskStatuses
  label: ETaskStatuses
}

export const EditTaskForm: React.FC<IProps> = ({ closeCallback }) => {
  const task = useSelector(selectors.getEditingTask)
  const dispatch = useDispatch()
  const [employeeName, setEmployeeName] = useState(task.employeeName)
  const [title, setTitle] = useState(String(task.title))
  const [status, setStatus] = useState<IStatusState | null>(null)

  useEffect(() => {
    setStatus({ label: task.status, value: task.status })
    setTitle(task.title)
    setEmployeeName(task.employeeName)
  }, [task.id])

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

  const handleChangeStatus = (val: IStatusState | null) => {
    setStatus(val)
  }

  const exitCallback = () => {
    setStatus({ value: ETaskStatuses.CREATED, label: ETaskStatuses.CREATED })
    setTitle('')
    setEmployeeName('')
    closeCallback()
  }

  const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({
      type: ETasksActionTypes.UPDATE_TASK,
      task: {
        employeeName,
        title,
        date: task.date,
        id: task.id,
        status: status?.value,
      },
    })
    exitCallback()
  }
  const options = [
    { value: ETaskStatuses.DONE, label: ETaskStatuses.DONE },
    { value: ETaskStatuses.CREATED, label: ETaskStatuses.CREATED },
  ]
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
      <div className={styles.statusField}>
        <span>Status: </span>
        <Select
          value={status}
          onChange={handleChangeStatus}
          options={options}
        />
      </div>
      <SubmitButton callback={handleSubmit} />
    </form>
  )
}
