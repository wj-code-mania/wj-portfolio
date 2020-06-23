import React from 'react'

const Layout = ({ header, content, footer }) => {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  )
}

export default Layout
