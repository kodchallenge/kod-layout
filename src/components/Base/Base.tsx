import React from 'react'

export type BaseProps = {
  height?: string | number;
}
const Base: React.FC<BaseProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  const {children, height, ...other} = props
  return (
    <div {...other}>
      {children}
    </div>
  )
}

export default Base