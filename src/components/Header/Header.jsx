import React from 'react'
import { SOCIALS } from '../../utils/util'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles['container']}>
            <a
                href="https://flowcv.me/rahulchaudhary"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>Coded by Rahul Chaudhary</h2>
            </a>

            <div className={styles['social-links']}>
                {SOCIALS.map((item) => (
                    <a
                        key={item.label}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="mailto:rahulchaudhary2244@gmail.com?subject=Want to consult&body=Hi Rahul,"
                    target="_top"
                >
                    Email
                </a>
            </div>
        </div>
    )
}

export default Header
