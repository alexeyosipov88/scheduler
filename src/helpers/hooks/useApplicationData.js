import { useState, useEffect } from "react";
import axios from "axios";
// import axios from "__mocks__/axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  
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
  
// edit param in bookInterview is used to make sure that the spots are not updated when a user clicks on 'save' button

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