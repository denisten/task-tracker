import React, { useCallback } from 'react'
import styles from './ButtonsPanel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { EGeneralUIActionTypes } from '../../features/generalUI'
import Select from 'react-select'
import {
  ESortOptions,
  selectors,
  ETasksActionTypes,
} from '../../features/tasks'

interface ISortSelectorOption {
  value: ESortOptions
  label: string
}

const sortOptionMap = {
  [ESortOptions.BY_DATE_INCREASING]: 'Old first',
  [ESortOptions.BY_DATE_DECREASING]: 'New first',
  [ESortOptions.BY_STATUS_DONE_FIRST]: 'Done first',
  [ESortOptions.BY_STATUS_CREATED_FIRST]: 'Created first',
}

const options: ISortSelectorOption[] = [
  {
    value: ESortOptions.BY_DATE_DECREASING,
    label: sortOptionMap[ESortOptions.BY_DATE_DECREASING],
  },
  {
    value: ESortOptions.BY_DATE_INCREASING,
    label: sortOptionMap[ESortOptions.BY_DATE_INCREASING],
  },
  {
    value: ESortOptions.BY_STATUS_CREATED_FIRST,
    label: sortOptionMap[ESortOptions.BY_STATUS_CREATED_FIRST],
  },
  {
    value: ESortOptions.BY_STATUS_DONE_FIRST,
    label: sortOptionMap[ESortOptions.BY_STATUS_DONE_FIRST],
  },
]

export const ButtonsPanel = () => {
  const dispatch = useDispatch()
  const sortOption = useSelector(selectors.getSortOption)
  const hasTasks = !!useSelector(selectors.getTasks).length
  const createTask = () => {
    dispatch({
      type: EGeneralUIActionTypes.SET_IS_OPEN_CREATE_TASK_MODAL,
      payload: true,
    })
  }

  const handleChangeSortOption = useCallback(
    (data: ISortSelectorOption | null) => {
      dispatch({
        type: ETasksActionTypes.SET_SORT_OPTION,
        payload: data?.value,
      })
    },
    []
  )
  return (
    <div className={styles.container}>
      <div className={styles.createTaskBtn} onClick={createTask}>
        Create task
      </div>
      {hasTasks ? (
        <Select
          className={styles.selector}
          value={{ value: sortOption, label: sortOptionMap[sortOption] }}
          options={options}
          onChange={handleChangeSortOption}
        />
      ) : null}
    </div>
  )
}
