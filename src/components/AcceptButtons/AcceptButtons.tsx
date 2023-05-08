import * as S from './style'
import { useTheme } from '@mui/material'
import Button from '../Button'

function AcceptButtons() {
  const theme = useTheme()
  const handleClick = () => {
    console.log('handleClick')
  }
  return (
    <S.ButtonContainer>
      <Button
        bg={theme.app.palette.green1}
        fontColor={theme.app.palette.white}
        sx={{ width: '150px' }}
        onClick={handleClick}
      >
        승인
      </Button>
      <Button
        bg={theme.app.palette.red}
        fontColor={theme.app.palette.white}
        sx={{ width: '150px' }}
        onClick={handleClick}
      >
        거부
      </Button>
    </S.ButtonContainer>
  )
}

export default AcceptButtons
