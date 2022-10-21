import React from "react"

export type TabProps = {

}

const Tab: React.FC<TabProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}

export default Tab