import React from "react"
import styled from "styled-components"

type ButtonLabelGroupProps = {
  children: React.ReactChild | Array<React.ReactChild>;
}

export default function ButtonLabelGroup({children}: ButtonLabelGroupProps) {
  return(<Wrapper>{children}</Wrapper>)
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
