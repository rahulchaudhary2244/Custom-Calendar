import React, { useState } from 'react'
import { getHTMLDate } from '../../utils/util'
import Calendar from '../Calendar/Calendar'
import styles from './HomePage.module.css'

function HomePage() {
    const [date, setDate] = useState(getHTMLDate(new Date()))

    const handleChange = (e) => {
        setDate(getHTMLDate(new Date(e.target.value)))
    }

    return (
        <div className={styles['container']}>
            <h1>Custom calendar in React</h1>
            <div className={styles['content']}>
                <Calendar date={new Date(date)} />
                <input type="date" value={date} onChange={handleChange} />
            </div>
        </div>
    )
}

export default HomePage
