import React from 'react'

function Guide({ date }) {
    return (
        <>
            <h3>How to use it in real application</h3>
            <p>
                <b>someDate = </b>
                {`${new Date(date)}`}
            </p>
            <p>
                {`<Calendar date={`} <b>someDate</b> {`} />`}
            </p>
        </>
    )
}

export default Guide
