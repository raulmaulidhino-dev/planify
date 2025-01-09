import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  }

  return (
    <>
      <main>
        <Sidebar date={date} onChange={onChange} />
      </main>
    </>
  )
}

export default App
