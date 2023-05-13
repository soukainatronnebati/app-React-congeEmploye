import React from 'react';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Menu from './Menu';
import Header from './Header';

<link rel="stylesheet" href="assets/css/style3.css"></link>

function Calendar() {
  
return (

  <div>
    <Header/>
    <Menu />
   <div className='pcoded-main-container p-5 d-block'>
    
      
    <FullCalendar
  plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
  initialView={'dayGridMonth'}
  headerToolbar={{
      start: "today prev,next", // will normally be on the left. if RTL, will be on the right
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
    }}
    height={"90vh"}
  />
    </div>
 

  </div>
)
  
}

export default Calendar
