import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'

const locales = {
  ko,
}

const getDayjsInstance = () => {
  return dayjs
}

dayjs.locale('ko')

export const dayjsInstance = getDayjsInstance()
