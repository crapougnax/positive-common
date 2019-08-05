/**
 * Return the label matching the given lang identifier or the default one
 * @param label string or object containing label(s)
 * @param lang lang identifier
 * @return string
 */
const renderLabel = (label: string|object, lang: string = 'fr') => {
  return typeof label === 'object' ? label[lang] : label
}

/**
 * Return the short or long version for the week number of the given date
 * @param date: Date
 * @param short: boolean
 * @return string
 */
const getWeekNumber = (date: Date, short: boolean = false) => {
  const d: Date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart: Date = new Date(Date.UTC(d.getUTCFullYear(),0,1))

  let week = String(Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1)/7))
  if (week.length === 1) {
    week = '0' + week
  }

  return short ? week : `${date.getFullYear()}W${week}`
}

const getPrevWeekNumber = (date: Date, short: boolean = false) => {
  return getWeekNumber(new Date(date.valueOf() - 7 * 86400000), short)
}

const getNextWeekNumber = (date: Date, short: boolean = false) => {
  return getWeekNumber(new Date(date.valueOf() + 7 * 86400000), short)
}

// @see https://gist.github.com/Abhinav1217/5038863
const getWeekBoundaryDates = (d1: Date) => {
  const numOfdaysPastSinceLastMonday = d1.getDay() - 1
  d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday)
  const weekNoToday = getWeek(d1)
  const weeksInTheFuture = getWeek(d1) - weekNoToday
  d1.setDate(d1.getDate() + (7 * weeksInTheFuture))

  const d2 = { ...d1 }
  d2.setDate(d2.getDate() + 6)

  return [
    `${d1.getFullYear()}-${d1.getMonth()+1}-${d1.getDate()}`,
    `${d2.getFullYear()}-${d2.getMonth()+1}-${d2.getDate()}`,
  ]
}

const getWeek = (date: Date) => {
  const yearBeginning = new Date(date.getFullYear(),0,1)
  return Math.ceil((((date.valueOf() - yearBeginning.valueOf()) / 86400000) + yearBeginning.getDay()+1)/7);
}

export {
  renderLabel,
  getWeekNumber,
  getPrevWeekNumber,
  getNextWeekNumber,
  getWeekBoundaryDates,
}
