import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  // const calculateSpots = () => {
  //   const appointments =  getAppointmentsForDay(state, state.day);
  //   console.log(appointments);
  //   let numberOfNullInterviews = 0;
  //   for (let appointment of appointments) {
  //     if(!appointment.interview) {
  //       numberOfNullInterviews++;
  //     }
  //   }
  //   console.log(numberOfNullInterviews);
  //   return numberOfNullInterviews;

  // }
  // const getNumberOfDaysArray = (days) => {
  //   for (let i =0; i < days.length; i++) {
  //     if (state.day === days[i].name) {
  //       return i;
  //     }
  //   }

  // }
  
 
  // const updateSpots = () => {
    
  //   if (state.days.length > 0) {

  //     let availableSpots = calculateSpots();
  //     console.log('BEFORE DECREMENTING',availableSpots);
  //     availableSpots--;
  //     console.log('AFTER DECREMENTING',availableSpots);
  //     let number = getNumberOfDaysArray(state.days);
      // const newObj = {... state};

      // let newDays = [...newObj.days];
  //     // console.log('THIS IS RIGHT DAY',newDays[number]['spots']);
      
  //     console.log('SPOTS FROM STATE COPY BEFORE CHANGE', newDays[number]['spots']);
  //     // newDays[number]['spots'] = 10;
  //     console.log('SPOTS FROM STATE COPY AFTER CHANGE', newDays[number]['spots']);
  //     console.log('SPOTS FROM ORIGINAL STATE', state.days[number]['spots'])
  //     let newState = {... state, newDays};
      
  //     // return newState;
  
  //   }
    
  // }

  // updateSpots();updateSpots();
  // console.log(updateSpots())
  function cancelInterview(id) {
    return new Promise((resolve, reject) => {

      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }
      const days = state.days.map((day) => {
        if (day.appointments.includes(id)) {
          if (appointments[id]) {
            day.spots++;
          }
        }
        return day;
      })
      

      axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({...state, appointments, days});
        resolve()
      })
      .catch(() => {
        reject();
      })      
    })
  }
  

  function bookInterview(id, interview, edit = false) {
    return new Promise((resolve, reject) => {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      const days = state.days.map((day) => {
        if (day.appointments.includes(id)) {
          if (appointments[id]) {
            if(!edit) {
              day.spots--;
            } 
          }
        }
        return day;
      })
      
      axios.put(`/api/appointments/${id}`, {interview})
        .then(() => {
          setState({...state, appointments, days});
          resolve();
        })
        .catch(() => {
          reject();
        })
    })
    
    
  }
  
  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {


    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

    })

  }, [])


  return { state, setDay, bookInterview, cancelInterview }
  
} 