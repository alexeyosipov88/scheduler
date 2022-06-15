import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";

import "components/Application.scss";
import Appointment from "components/Appointment";
// import getAppointmentsForDay from "../helpers/selectors";
// import { getInterview } from "../helpers/selectors";
// import { getInterviewersForDay } from "../helpers/selectors";
// import useApplicationData from "helpers/hooks/useApplicationData";

export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const daylyAppointments = [];

  daylyAppointments.map((elem) => (
    <Appointment key={elem.id} {...elem} />
  ));
  
  useEffect(() => {
    
    axios
      .get("api/days")
      .then((res) => {
        setState((prev) => ({... prev, days: res.data}));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <DayList days={state.days} value={state.day} setDay={(day) => setState({... state, day})} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {daylyAppointments}
        <Appointment key="last" time="5pm" />
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
