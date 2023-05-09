import * as S from './style'
import { useTheme } from '@mui/material'
import Button from '../Button'
import AcceptModal from '../AcceptModal'
import { useState } from 'react'

function AcceptButtons({
  PositiveMsg,
  NegativeMsg,
  acceptFunc,
  rejectFunc,
  checkItems,
}: {
  PositiveMsg: string
  NegativeMsg: string
  acceptFunc: () => void
  rejectFunc: () => void
  checkItems: string[]
}) {
  const theme = useTheme()
  const [modalMsg, setModalMsg] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setModalMsg(e.target.id === 'Accept' ? PositiveMsg : NegativeMsg)
    setOpen(true)
  }
  return (
    <>
      <S.ButtonContainer>
        <Button
          id="Accept"
          bg={theme.app.palette.green1}
          fontColor={theme.app.palette.white}
          sx={{ width: '150px' }}
          onClick={handleClick}
        >
          {PositiveMsg}
        </Button>
        <Button
          id="Reject"
          bg={theme.app.palette.red}
          fontColor={theme.app.palette.white}
          sx={{ width: '150px' }}
          onClick={handleClick}
        >
          {NegativeMsg}
        </Button>
      </S.ButtonContainer>
      <AcceptModal
        open={open}
        handleClose={handleClose}
        modalMsg={modalMsg}
        acceptFunc={acceptFunc}
        rejectFunc={rejectFunc}
        checkItems={checkItems}
      />
    </>
  )
}

export default AcceptButtons
