import React from 'react'
import styles from './Input.module.css'

interface IProps {
  onChange: (name: string) => void
  placeHolder?: string
  value: string
}

export const Input: React.FC<IProps> = (props) => {
  const { onChange: onChangeCallback, placeHolder, value } = props
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCallback(e.target.value)
  }
  return (
    <div className={styles.data}>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeHolder}
        value={value}
      />
    </div>
  )
}
