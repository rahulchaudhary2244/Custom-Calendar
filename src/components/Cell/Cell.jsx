import React from 'react'
import styles from './Cell.module.css'

function Cell({ input, isActiveDate }) {
    if (!!Number(input) && Number(input) > 0 && Number(input) < 32)
        return (
            <div
                className={`${styles['grid-item']} ${
                    isActiveDate
                        ? styles['active-date']
                        : styles['non-active-date']
                } `}
            >
                {Number(input) < 1 ? '' : input}
            </div>
        )

    return (
        <div className={styles['grid-item']}>
            {Number(input) < 1 ? '' : input}
        </div>
    )
}

export default Cell
