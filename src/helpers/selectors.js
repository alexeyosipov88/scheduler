export default function getAppointmentsForDay(state, day) {

  const result = [];
  if (!day) {
    return result;
  }

  if (state.days.length === 0) {
    return result;
  }


  let appointmentNumbers;

  for (let dayFromDays of state.days) {
    if (day === dayFromDays.name) {
      appointmentNumbers = [...dayFromDays.appointments];
    }
  }

  if (!appointmentNumbers) {
    return result;
  }

  for (let number of appointmentNumbers) {
    result.push(state.appointments[number]);
  }

  return result;
}

export function getInterview(state, interview) {
  const result = {... interview};
  if (!interview) {
    return null;
  }
  
  result.interviewer = state.interviewers[interview.interviewer];
  
  return result;

}

export function getInterviewersForDay(state, day) {

  const result = [];
  if (!day) {
    return result;
  }

  if (state.days.length === 0) {
    return result;
  }


  let interviewsNumbers;

  for (let dayFromDays of state.days) {
    if (day === dayFromDays.name) {
      interviewsNumbers = [... dayFromDays.interviewers];
    }
  }

  if (!interviewsNumbers) {
    return result;
  }

  for (let number of interviewsNumbers) {
    result.push(state.interviewers[number]);
  }

  return result;
}

