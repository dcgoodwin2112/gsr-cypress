import styled from "styled-components"
import type { WithChildrenProps } from "../types"

export default function ButtonLabelGroup({children}: WithChildrenProps) {
  return(<Wrapper>{children}</Wrapper>)
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
