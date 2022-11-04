import React from 'react';

export type BaseProps = {
  height?: string | number;
}
const Base: React.FC<BaseProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { children, height, className, style: divStyle, ...other } = props
  const style: React.CSSProperties = {
    height: height ?? "100%",
  }
  const inlineCss = getInlineCss()

  return (
    <div
      className={`kl-base ${className ?? ""}`}
      style={{ ...style, ...divStyle }}
      {...other}
    >
      <style>{inlineCss}</style>
      {children}
    </div>
  )
}

const getInlineCss = () => {
  return `
    .kl-base {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }
    .kl-base .kl-split {
      height: 100%;
    }

    .kl-base .kl-row, .kl-base .kl-column {
      flex-grow: 1;
      overflow: auto;
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
      background-color: #8f8f8f10;
      background-repeat: no-repeat;
      background-position: 50%;
    }

    .kl-base .gutter.gutter-horizontal {
      cursor: col-resize;
    }

    .kl-base .gutter.gutter-vertical {
      cursor: row-resize;
      width: 100% !important;
    }

    .kl-base .kl-tab {
      overflow: auto;
    }
  `
}

export default Base