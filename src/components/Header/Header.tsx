import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/theme-context'
export type HeaderProps = {

}
const Header: React.FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  const {children, style: headerStyle, ...others} = props
  const theme = useContext(ThemeContext)
  
  const style: React.CSSProperties = {
    backgroundColor: theme.background,
    color: theme.foreground,
    boxShadow: "0px 2px 3px 0px #00000050;",
    padding: 10
  }
  return (
    <header
      style={{...style, ...headerStyle}}
      {...others}
    >
      {children}
    </header>
  )
}

export default Header