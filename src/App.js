import { useState } from 'react'
import Calendar from './components/Calendar/Calendar'

function App() {
    const [date, setDate] = useState(new Date())

    const handleChange = (e) => {
        setDate(new Date(e.target.value))
    }

    return (
        <div>
            <Calendar date={date} />
            <input type="date" value={date} onChange={handleChange} />
        </div>
    )
}

export default App
