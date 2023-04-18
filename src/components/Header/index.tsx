import Icon from '../../assets/icon.svg'
import LeftEffect from '../../assets/left-effect.svg'
import RightEffect from '../../assets/right-effect.svg'
import {
  CenterEffect,
  HeaderContainer,
  InnerContainer,
  LeftEllipseEffect,
  RightEllipseEffect,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <img src={LeftEffect} alt="" />
        <img src={Icon} alt="" />

        <img src={RightEffect} alt="" />
      </InnerContainer>

      <LeftEllipseEffect />
      <CenterEffect />
      <RightEllipseEffect />
    </HeaderContainer>
  )
}
