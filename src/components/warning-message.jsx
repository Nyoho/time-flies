import React from 'react'

const style = {
  display: 'block',
  padding: '8px',
  backgroundColor: '#e04044',
  color: 'black',
  borderRadius: '4px',
}

const WarningMessage = ({ children }) => <span style={style}>{children}</span>

export default WarningMessage
