import React from 'react'
import styles from './TaskList.module.css'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/tasks'
import { TaskItem } from '../TaskItem'
import { TaskListTitles } from '../TaskListTitles'
import { getSortedTasks } from '../../utils'

export const TaskList = () => {
  const tasks = useSelector(selectors.getTasks)
  const sortOption = useSelector(selectors.getSortOption)
  const sortedTasks = getSortedTasks(sortOption, tasks)
  const hasTasks = !!tasks.length
  return (
    <div className={styles.container}>
      <TaskListTitles />
      {hasTasks ? (
        <>
          {sortedTasks.map((task) => {
            return <TaskItem task={task} key={task.id} />
          })}
        </>
      ) : (
        <div className={styles.emptyList}> No tasks yet!</div>
      )}
    </div>
  )
}
