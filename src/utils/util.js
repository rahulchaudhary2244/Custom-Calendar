export const getCalendarDataByDate = (date = new Date()) => {
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)
    const daysToSkip = getFirstDayOfMonthByDate(date)
    const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    return {
        currentYear,
        currentMonthName: date.toLocaleString('default', { month: 'long' }),
        dateNumbersForMonth: getDateNumbersForMonth(
            daysToSkip,
            daysInCurrentMonth
        ),
        weekDays: WEEK_DAYS,
        activeDate: date.getDate(),
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}

function getFirstDayOfMonthByDate(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

function getDateNumbersForMonth(daysToSkip, daysInCurrentMonth) {
    const dateNumbersForMonth = []
    for (let index = 0; index < daysToSkip; index++) {
        dateNumbersForMonth.push(-index)
    }
    for (let index = 1; index <= daysInCurrentMonth; index++) {
        dateNumbersForMonth.push(index)
    }
    return dateNumbersForMonth
}

export const getHTMLDate = (date = new Date()) => {
    const month = date.toLocaleString('default', {
        month: '2-digit',
    })
    const day = date.toLocaleString('default', {
        day: '2-digit',
    })
    return `${date.getFullYear()}-${month}-${day}`
}
