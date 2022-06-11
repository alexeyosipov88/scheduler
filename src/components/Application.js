import React, { useState } from "react";
import DayList from "components/DayList";

import "components/Application.scss";
// import Appointment from "components/Appointment";
// import getAppointmentsForDay from "../helpers/selectors";
// import { getInterview } from "../helpers/selectors";
// import { getInterviewersForDay } from "../helpers/selectors";
// import useApplicationData from "helpers/hooks/useApplicationData";


export default function Application(props) {

  const [day, setDay] = useState("Monday");

  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];
  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
          />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            day={day}
            setDay={setDay}
            />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
          />
      </section>
    </main>
  );
  
    // const { state, setDay, bookInterview, cancelInterview } =
    //   useApplicationData();
  
    // const dailyAppointments = getAppointmentsForDay(state, state.day);
    // const dailyInterviewers = getInterviewersForDay(state, state.day);
  
  //   return (

  //     <main className="layout">
  //       <section className="sidebar">
  //         <img
  //           className="sidebar--centered"
  //           src="images/logo.png"
  //           alt="Interview Scheduler"

  //         />
  //         <hr className="sidebar__separator sidebar--centered" />
  //         <nav className="sidebar__menu">
  //           <DayList
  //             days={state.days}
  //             day={state.day}
  //             setDay={setDay}
  //           />
  //         </nav>
  //         <img
  //           className="sidebar__lhl sidebar--centered"
  //           src="images/lhl.png"
  //           alt="Lighthouse Labs"
  //         />
  //       </section>
  //       <section className="schedule">
  //         {
  //           dailyAppointments.map((appointment) => {
  //             const interview = getInterview(state, appointment.interview);

  //             return (<Appointment
  //               key={appointment.id}
  //               id={appointment.id}
  //               time={appointment.time}
  //               interview={interview}
  //               interviewers={dailyInterviewers}
  //               bookInterview={bookInterview}
  //               cancelInterview={cancelInterview}
  //               />)
  //           }
  //           )
  //         }
  //         <Appointment id="last" time="5pm" />
  //       </section>
  //     </main>
  //   );
}
