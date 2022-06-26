import React from 'react'
import TrashImg from '../../assets/trash.png'
import EditImg from '../../assets/edit.png'
import styles from './Icon.module.css'
import classNames from 'classnames'

export enum EIcons {
  Trash = 'Trash',
  Edit = 'Edit',
}

const IconsMap = {
  [EIcons.Trash]: TrashImg,
  [EIcons.Edit]: EditImg,
}

interface IProps {
  type: EIcons
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IProps> = ({ type, className, onClick }) => {
  return (
    <div className={classNames(className, styles.container)} onClick={onClick}>
      <img src={IconsMap[type]} alt="" className={styles.container} />
    </div>
  )
}
