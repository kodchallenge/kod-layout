import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/theme-context'
export type HeaderProps = {

}
const Header: React.FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  const {children, style: headerStyle, ...others} = props
  
  const style: React.CSSProperties = {
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