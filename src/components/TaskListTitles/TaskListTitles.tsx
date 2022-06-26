import React from 'react'
import styles from './TaskListTitles.module.css'

export const TaskListTitles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Title</div>
      <div className={styles.worker}>Employee</div>
      <div>Date</div>
      <div>Status</div>
    </div>
  )
}
