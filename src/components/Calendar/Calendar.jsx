import React from 'react'
import { getCalendarDataByDate } from '../../utils/util'
import Cell from '../Cell/Cell'
import styles from './Calendar.module.css'

function Calendar({ date = new Date() }) {
    const {
        currentMonthName,
        currentYear,
        dateNumbersForMonth,
        weekDays,
        activeDate,
    } = getCalendarDataByDate(date)

    return (
        <div className={styles['container']}>
            <div className={styles['grid-container-month-year']}>
                <Cell input={currentMonthName} />
                <Cell input={currentYear} />
            </div>

            <div className={styles['grid-container-week']}>
                {weekDays.map((item) => (
                    <Cell key={item} input={item} />
                ))}
            </div>

            <div className={styles['grid-container-days']}>
                {dateNumbersForMonth.map((item) => (
                    <Cell
                        key={item}
                        input={item}
                        isActiveDate={item === activeDate}
                    />
                ))}
            </div>
        </div>
    )
}

export default Calendar
