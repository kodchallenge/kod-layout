import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../theme/theme-context';

export type BaseProps = {
  height?: string | number;
  theme?: "dark" | "light"
}
const Base: React.FC<BaseProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { children, height, theme: outTheme, className, style: divStyle, ...other } = props
  const theme = useContext(ThemeContext)
  const style: React.CSSProperties = {
    height: height ?? "100%",
    fontFamily: theme.font
  }

  const inlineCss = getInlineCss({theme})

  return (
    <ThemeContext.Provider value={outTheme == "light" ? themes.light : themes.dark}>
      <div
        className={`kl-base ${className ?? ""}`}
        style={{ ...style, ...divStyle }}
        {...other}
      >
        <style>{inlineCss}</style>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

const getInlineCss = (props:any) => {
  return `
    .kl-base {
      background-color: ${props.theme.background};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .kl-base .kl-split {
      height: 100%;
    }

    .kl-base .kl-row {
      height: 100%;
    }

    .kl-base .kl-row > .kl-split {
      display: flex;
      flexDirection: row;
    }
    
    .kl-base .kl-column > .kl-split {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .kl-base .kl-column {
      height: 100%;
    }

    .kl-base .kl-row > .kl-split > * {
      height: 100% !important;
    }
    
    .kl-base .kl-column > .kl-split > * {
      width: 100% !important;
    }

    .kl-base .gutter {
      background-color: ${props.theme.gutter};
      background-repeat: no-repeat;
      background-position: 50%;
    }

    .kl-base .gutter.gutter-horizontal {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
      cursor: col-resize;
    }

    .kl-base .gutter.gutter-vertical {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
      cursor: row-resize;
      width: 100% !important;
    }
  `
}

export default Base