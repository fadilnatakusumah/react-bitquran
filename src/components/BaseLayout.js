import React from 'react'
import styled from '@emotion/styled'

function BaseLayout({ children }) {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
`

const Wrapper = styled('div')`
  height: 100%;
  background: white;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
`

export default BaseLayout
