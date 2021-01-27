import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Layout = ({ header, content, footer }) => {
  return (
    <Wrapper>
      {header}
      {content}
      {footer}
    </Wrapper>
  )
}

export default Layout
