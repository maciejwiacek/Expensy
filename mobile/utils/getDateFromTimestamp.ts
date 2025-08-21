import { Timestamp } from 'firebase/firestore'

export const getDateFromTimestamp = (date: any): Date => {
  if (date instanceof Timestamp) {
    return date.toDate()
  }

  if (date?.seconds && date?.nanoseconds) {
    return new Timestamp(date.seconds, date.nanoseconds).toDate()
  }

  return new Date(date)
}
