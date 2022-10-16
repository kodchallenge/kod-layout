import React, { useContext } from 'react'
import { DarkTheme } from '../../theme/darkTheme';
import { ThemeContext } from '../../theme/theme-context';

export type BaseProps = {
  height?: string | number;
  theme?: "dark" | "light"
}
const Base: React.FC<BaseProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { children, height, theme: outTheme, style: divStyle, ...other } = props
  const theme = useContext(ThemeContext)
  const style: React.CSSProperties = {
    height: height ?? "100%",
    fontFamily: theme.font
  }

  return (
    <ThemeContext.Provider value={outTheme == "dark" ? DarkTheme : DarkTheme}>
      <div
        style={{ ...style, ...divStyle }}
        {...other}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Base