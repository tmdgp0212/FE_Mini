import BigCalendar from '../components/Calendar/BigCalendar'
<<<<<<< HEAD
import Title from '../components/Title'

function Home() {
  return (
    <div>
      <Title text="전체 일정" />
      <BigCalendar />
    </div>
=======
import { useEffect, useState } from 'react'
import { VacationEntity } from '../types/vacation'
import { useMutation } from '@tanstack/react-query'
import { deleteVacation, getVacation } from '../api/vacation'
import { Event, dayjsLocalizer } from 'react-big-calendar'
import { dayjsInstance } from '../util'
import { useTheme } from '@mui/material'
import { DutyEntity } from '../types/duty'
import { getDuty } from '../api/duty'
import { useProtectedOulet } from '../hooks'
import { UserRole } from '../types/user'
import Modal from '../components/Modal'
import EditSchedules from '../components/EditSchedules'

export interface CustomEvent extends Event {
  id: number
  type: string
}

function Home() {
  const user = useProtectedOulet()
  const localizer = dayjsLocalizer(dayjsInstance)
  const [openModal, setOpenModal] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [modifyData, setModifyData] = useState<CustomEvent>()
  const [dutys, setDutys] = useState<CustomEvent[]>([])
  const [vacations, setVacations] = useState<CustomEvent[]>([])

  const theme = useTheme()

  const eventPropGetter = (event: CustomEvent) => {
    const defaultStyle = {
      color: theme.app.palette.black,
      borderRadius: '0px',
      outline: 'none',
    }

    if (event.type === 'duty') {
      return {
        style: {
          ...defaultStyle,
          backgroundColor: theme.app.palette.green2,
          border: `1px solid ${theme.app.palette.green4}`,
        },
      }
    } else {
      return {
        style: {
          ...defaultStyle,
          backgroundColor: theme.app.palette.yellow2,
          border: `1px solid ${theme.app.palette.yellow1}`,
        },
      }
    }
  }

  const { data: duty, mutate: dutyMutate } = useMutation((month: number) => getDuty(month), {
    onSuccess: (data) => {
      console.log(data)
      const formattedData: CustomEvent[] = data.map((event: DutyEntity) => ({
        title: `${event.memberName}(${event.departmentName})`,
        start: new Date(event.day),
        end: new Date(event.day),
        status: event.status,
        type: 'duty',
        id: Number(event.id),
      }))
      setDutys([...formattedData])
    },
  })
  const { data: vacation, mutate: vacationMutate } = useMutation((month: number) => getVacation(month), {
    onSuccess: (data) => {
      const formattedData: CustomEvent[] = data.map((event: VacationEntity) => ({
        title: `${event.memberName}(${event.departmentName})`,
        start: new Date(event.start),
        end: new Date(event.end),
        status: event.status,
        type: 'vacation',
        id: Number(event.id),
      }))
      setVacations([...formattedData])
    },
  })
  const { mutate: deleteVacationMutate } = useMutation((id: number) => deleteVacation(id))
  // const { mutate: deleteDutyMutate } = useMutation((id: number) => deleteDuty(id))

  const onSelect = (event: CustomEvent) => {
    if (!admin) return
    console.log(event)
    setOpenModal(true)
    setModifyData(event)
  }

  const onNavigate = async (date: Date) => {
    if (date) {
      const month = new Date(date).getMonth() + 1
      await Promise.all([vacationMutate(month), dutyMutate(month)])
    }
  }

  const deleteSchedule = (id: number, type: string) => {
    if (!admin) return
    if (type === 'vacation') {
      deleteVacationMutate(id)
    } else {
      // deleteDutyMutate(id)
    }
  }

  useEffect(() => {
    const month = new Date().getMonth() + 1
    vacationMutate(month)
    dutyMutate(month)
  }, [])

  useEffect(() => {
    if (user?.role === UserRole['ADMIN']) {
      setAdmin(true)
    }
  }, [user])

  return (
    <>
      <BigCalendar
        vacations={vacations}
        dutys={dutys}
        localizer={localizer}
        eventPropGetter={eventPropGetter}
        onSelect={onSelect}
        onNavigate={onNavigate}
      />
      {openModal && (
        <Modal ModalHandler={setOpenModal}>
          <EditSchedules data={modifyData} deleteHandler={deleteSchedule} />
        </Modal>
      )}
    </>
>>>>>>> 271d6a22964a34eeef2e58b7ec0075f78fcaf803
  )
}

export default Home
