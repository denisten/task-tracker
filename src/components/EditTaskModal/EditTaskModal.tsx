import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskModal } from '../TaskModal'
import { EGeneralUIActionTypes } from '../../features/generalUI'
import { EditTaskForm } from '../EditTaskForm'
import { selectors } from '../../features/generalUI'

export const EditTaskModal = () => {
  const dispatch = useDispatch()
  const closeModal = () =>
    dispatch({
      type: EGeneralUIActionTypes.SET_IS_OPEN_EDIT_TASK_MODAL,
      payload: false,
    })
  const isOpen = useSelector(selectors.getIsEditModalOpen)

  return (
    <TaskModal closeCallback={closeModal} isOpen={isOpen}>
      <EditTaskForm closeCallback={closeModal} />
    </TaskModal>
  )
}
