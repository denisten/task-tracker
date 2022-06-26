import React from 'react'
import styles from './TaskListTitles.module.css'

export const TaskListTitles = () => {
  return (
    <div className={styles.container}>
      <div>Title</div>
      <div>Employee</div>
      <div>Date</div>
      <div>Status</div>
    </div>
  )
}
