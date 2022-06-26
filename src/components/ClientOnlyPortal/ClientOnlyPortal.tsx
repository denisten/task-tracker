import { useRef, useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

// @ts-ignore
export function ClientOnlyPortal({ children, selector }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null
}
