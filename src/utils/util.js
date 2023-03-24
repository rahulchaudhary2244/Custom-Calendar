// Definition of Data Structures used
/**
 * @typedef {Object} CalendarData - Data required for Calendar Component
 *
 * @property {number} currentYear - current year
 * @property {string} currentMonthName - current month name in full length words
 * @property {Array.<string>} weekDays - array of week days abbrevation
 * @property {Array.<number>} dateNumbersForMonth - array of date which will be present in a month
 * @property {number} activeDate - active date which will be shown as selected date
 */

/**
 * This function returns all necessary data which is required for a calendar
 * @param {Date} date Accepts Date object
 * @returns {CalendarData} object
 */
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

/**
 *This function returns number of days a month can have
 * @param {number} year Accepts year in YYYY format
 * @param {number} month Accepts month for which we have to count days
 * @returns {number} 28 | 29 | 30 | 31
 */
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}

/**
 * This function returns first day in a month
 * @param {Date} date Accepts Date object
 * @returns {number} weekday which range from (0, ...6) for (Sunday, ...Saturday) respectively
 */
function getFirstDayOfMonthByDate(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

/**
 * This function tells how many days a month will have
 * @param {number} daysToSkip Accepts number from (0, ...6)
 * @param {number} daysInCurrentMonth Accepts only numbers as [28, 29, 30, 31]
 * @returns {Array.<number>} date present in a month can be [1, ...28] | [1, ...29] | [1, ...30] | [1, ...31] with number of days skipping in front from (0, ...6)
 */
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

/**
 * Converts Javascript Date object to string which HTML input:date can accept as a input
 * @param {Date} date Accepts date object
 * @returns {string} HTML input type date compatible string
 */
export const getHTMLDate = (date = new Date()) => {
    const month = date.toLocaleString('default', {
        month: '2-digit',
    })
    const day = date.toLocaleString('default', {
        day: '2-digit',
    })
    return `${date.getFullYear()}-${month}-${day}`
}

export const SOCIALS = [
    { label: 'Github', link: 'https://github.com/rahulchaudhary2244' },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/rahulchaudhary2244/',
    },
]
