import React from 'react'
export type RowProps = {

}
const Row: React.FC<RowProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  const {children, ...other} = props
  return (
    <div {...other}>
      {children}
    </div>
  )
}

export default Row