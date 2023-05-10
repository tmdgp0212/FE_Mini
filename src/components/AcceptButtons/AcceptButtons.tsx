import * as S from './style'
import { useTheme } from '@mui/material'
import Button from '../Button'

function AcceptButtons() {
  const theme = useTheme()
  return (
    <S.ButtonContainer>
      <Button bg={theme.app.palette.green1} fontcolor={theme.app.palette.white} sx={{ width: '150px' }}>
        승인
      </Button>
      <Button bg={theme.app.palette.red} fontcolor={theme.app.palette.white} sx={{ width: '150px' }}>
        거부
      </Button>
    </S.ButtonContainer>
  )
}

export default AcceptButtons
