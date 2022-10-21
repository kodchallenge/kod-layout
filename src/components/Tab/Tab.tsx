import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/theme-context'

const Tab = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.background, color: theme.foreground}}>
      Tab
    </div>
  )
}

export default Tab