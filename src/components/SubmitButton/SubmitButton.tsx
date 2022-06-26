import React from 'react'
import styles from './SubmitButton.module.css'

interface IProps {
  callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const SubmitButton: React.FC<IProps> = ({ callback }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={(e) => callback(e)}>
        Submit
      </div>
    </div>
  )
}
