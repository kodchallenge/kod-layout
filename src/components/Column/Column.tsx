import React from 'react'
import Split from "react-split"

export type ColumnProps = {
  gutterSize?: number;
  snapOffset?: number;
}
const Column: React.FC<ColumnProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { children, gutterSize, snapOffset, className, ...other } = props
  return (
    <div className={`kl-column ${className ?? ""}`} {...other}>
      <Split
				direction="vertical"
        className="kl-split"
        gutterSize={gutterSize ?? 3}
        snapOffset={snapOffset ?? 0}
      >
        {children}
      </Split>
    </div>
  )
}
export default Column