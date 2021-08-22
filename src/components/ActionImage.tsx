import styled from "styled-components"
import COLORS from "../styles/colors"
import { ACTIONS } from "../lib/game"

type ActionImageProps = {
  children: React.ReactNode
  action: ACTIONS
}

export default function ActionImage({ children, action }: ActionImageProps) {
  return (
    <Wrapper>
      {action === ACTIONS.GOOD ? (
        <ImageWrapper
          src="/good_cat.png"
          alt="Good cat is good kitty. Maybe not as good of a boy as his puppy friends, but compared to most cats this is one saintly feline"
        />
      ) : action === ACTIONS.SAD ? (
        <ImageWrapper
          src="/sad_cat.png"
          alt="Sad cat is having a bad day. He tried to catch a mouse but lost it, his human picked up the wrong cat food, and he even had to get a bath. Don't worry sad cat. Tomorrow will be better."
        />
      ) : action === ACTIONS.RAD ? (
        <ImageWrapper
          src="/rad_cat.png"
          alt="Rad cat is just too rad. The world cannot handle his level of cool. Keep doing you rad cat. The world will catch up eventually."
        />
      ) : (
        <PlaceholderWrapper>{children}</PlaceholderWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 260px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageWrapper = styled.img`
  position: relative;
`

const PlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 270px;
  color: ${COLORS.primaryDark};
  font-size: 1.4rem;
  font-weight: 700;
`
