import * as S from './style'

interface TitleProps {
  text: string
}

function Title({ text }: TitleProps) {
  return <S.Title>{text}</S.Title>
}

export default Title
