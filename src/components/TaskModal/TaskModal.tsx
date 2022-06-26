import React, { useEffect, useRef } from 'react'
import styles from './TaskModal.module.css'
import { ClientOnlyPortal } from '../ClientOnlyPortal'
import classNames from 'classnames'

interface IProps {
  closeCallback: () => void
  isOpen: boolean
}

export const TaskModal: React.FC<IProps> = ({
  children,
  closeCallback,
  isOpen,
}) => {
  const isAnimationEnded = useRef(true)
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      isAnimationEnded.current = false
    }
  }, [isOpen, isAnimationEnded.current])

  return (
    <ClientOnlyPortal selector="#bottomSlider">
      <div
        className={classNames(styles.container, {
          [styles.removeOpacity]: !isOpen,
          [styles.hidden]: isAnimationEnded && !isOpen,
        })}
        onTransitionEnd={() => (isAnimationEnded.current = true)}
        onClick={handleClick}
      >
        <div className={styles.overlay} onClick={closeCallback} />
        <div className={styles.content}>
          {children}
          <div className={styles.closeIcon} onClick={closeCallback}>
            x
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  )
}
