import React from 'react'
import Split from "react-split"

export type RowProps = {
  snapOffset?: number;
  gutterSize?: number;
  maxSize?: number | number[];
  minSize?: number | number[];
  sizes?: number[]
}
const Row: React.FC<RowProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { children, snapOffset, minSize, maxSize, sizes, gutterSize, className, ...other } = props
  
  return (
    <div className={`kl-row ${className ?? ""}`} {...other}>
      <Split
        className="kl-split"
        gutterSize={gutterSize ?? 3}
        minSize={minSize}
        maxSize={maxSize}
        sizes={sizes}
        snapOffset={snapOffset ?? 0}
      >
        {children}
      </Split>
    </div>
  )
}

export default Row