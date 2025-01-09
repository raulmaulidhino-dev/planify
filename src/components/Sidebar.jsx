import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Sidebar = ({date, onChange}) => {
    return(
        <aside>
            <h1>PLANIFY</h1>
            <Calendar onChange={onChange} value={date}/>
            <p>Selected Date: {date.toLocaleDateString()}</p>
        </aside>
    );
}

export default Sidebar;