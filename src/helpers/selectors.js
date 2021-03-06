
const getAppointmentsForDay = (state, day) => {
  const result = [];
  for(let currDay of state.days) {
    if(currDay.name === day) {
      for(let appointment of currDay.appointments) {
        result.push(state.appointments[appointment]);
      }
      return result;
    }
  }
  return result;
}


const getInterview = (state, interview) => {
  const result = {};
  if(!interview) return null;
  result.student = interview.student;
  const interviewer = {};
  interviewer.id = interview.interviewer;
  interviewer.name = state.interviewers[interviewer.id].name;
  interviewer.avatar = state.interviewers[interviewer.id].avatar;
  result.interviewer = interviewer;
  return result;
}


export  {getAppointmentsForDay, getInterview};



// export default function getAppointmentsForDay(state, day) {

//   const result = [];
//   if (!day) {
//     return result;
//   }

//   if (state.days.length === 0) {
//     return result;
//   }


//   let appointmentNumbers;

//   for (let dayFromDays of state.days) {
//     if (day === dayFromDays.name) {
//       appointmentNumbers = [...dayFromDays.appointments];
//     }
//   }

//   if (!appointmentNumbers) {
//     return result;
//   }

//   for (let number of appointmentNumbers) {
//     result.push(state.appointments[number]);
//   }

//   return result;
// }

// export function getInterview(state, interview) {
//   const result = {...interview};
//   if (!interview) {
//     return null;
//   }
  
//   result.interviewer = state.interviewers[interview.interviewer];
  
//   return result;

// }

// export function getInterviewersForDay(state, day) {

//   const result = [];
//   if (!day) {
//     return result;
//   }

//   if (state.days.length === 0) {
//     return result;
//   }


//   let interviewsNumbers;

//   for (let dayFromDays of state.days) {
//     if (day === dayFromDays.name) {
//       interviewsNumbers = [...dayFromDays.interviewers];
//     }
//   }

//   if (!interviewsNumbers) {
//     return result;
//   }

//   for (let number of interviewsNumbers) {
//     result.push(state.interviewers[number]);
//   }

//   return result;
// }

