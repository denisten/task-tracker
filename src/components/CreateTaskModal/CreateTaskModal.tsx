import React from 'react'
import { TaskModal } from '../TaskModal'
import { CreateTaskForm } from '../CreateTaskForm'
import { useDispatch, useSelector } from 'react-redux'
import { EGeneralUIActionTypes } from '../../features/generalUI'
import { selectors } from '../../features/generalUI'

export const CreateTaskModal = () => {
  const dispatch = useDispatch()
  const closeModal = () =>
    dispatch({
      type: EGeneralUIActionTypes.SET_IS_OPEN_CREATE_TASK_MODAL,
      payload: false,
    })
  const isOpen = useSelector(selectors.getIsCreateModalOpen)

  return (
    <TaskModal closeCallback={closeModal} isOpen={isOpen}>
      <CreateTaskForm closeCallback={closeModal} />
    </TaskModal>
  )
}
