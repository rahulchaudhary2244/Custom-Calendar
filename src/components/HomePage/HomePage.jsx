import React, { useState } from 'react'
import { getHTMLDate } from '../../utils/util'
import Calendar from '../Calendar/Calendar'
import Guide from '../Guide/Guide'
import Header from '../Header/Header'
import styles from './HomePage.module.css'

function HomePage() {
    const [date, setDate] = useState(getHTMLDate(new Date()))

    const handleChange = (e) => {
        setDate(getHTMLDate(new Date(e.target.value)))
    }

    return (
        <div className={styles['container']}>
            <Header />
            <h1>Custom calendar in React</h1>
            <Guide date={new Date(date)} />
            <div className={styles['content']}>
                <div className={styles['sub-content']}>
                    <h2>Calendar component</h2>
                    <Calendar date={new Date(date)} />
                </div>
                <div className={styles['sub-content']}>
                    <h2>Test by giving inputs here</h2>
                    <input type="date" value={date} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
