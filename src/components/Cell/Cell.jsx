import React from 'react'
import styles from './Cell.module.css'

function Cell({ input, isActiveDate }) {
    if (isNaN(input) || Number(input) < 1 || Number(input) > 31)
        return (
            <div className={styles['grid-item']}>
                {Number(input) < 1 ? '' : input}
            </div>
        )

    return (
        <div
            className={`${styles['grid-item']} ${
                isActiveDate ? styles['active-date'] : styles['non-active-date']
            } `}
        >
            {input || ''}
        </div>
    )
}

export default Cell
