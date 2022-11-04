import React from "react"

export type TabProps = {

}

const Tab: React.FC<TabProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  return (
    <div className="kl-tab" {...props}>
      {props.children}
    </div>
  )
}

export default Tab