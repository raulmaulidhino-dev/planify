import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Sidebar = ({date, onChange}) => {
    return(
        <aside>
            <h1>PLANIFY</h1>
            <Calendar onChange={onChange} value={date} prev2Label="" next2Label="" calendarType="gregory" />
            <p>{date.toDateString()}</p>
        </aside>
    );
}

export default Sidebar;