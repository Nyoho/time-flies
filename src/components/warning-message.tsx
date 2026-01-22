import type { ReactNode } from 'react'

const style = {
  display: 'block',
  padding: '8px',
  backgroundColor: '#e04044',
  color: 'black',
  borderRadius: '4px',
}

interface WarningMessageProps {
  children: ReactNode
}

const WarningMessage = ({ children }: WarningMessageProps) => <span style={style}>{children}</span>

export default WarningMessage
