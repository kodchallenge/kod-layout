import React from 'react'

export type ColumnProps = {

}
const Column: React.FC<ColumnProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  const {children, ...other} = props
  return (
    <div {...other}>
      {children}
    </div>
  )
}
export default Column