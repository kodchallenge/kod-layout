import React from 'react'

export type FooterProps = {

}

const Footer: React.FC<FooterProps & React.HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  return (
    <footer {...props}>
      {props.children}
    </footer>
  )
}

export default Footer