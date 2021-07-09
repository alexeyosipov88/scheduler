import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import 'components/InterviewerList.scss'


export default function InterviewerList(props) {
  const interviewers = props.interviewers;
  interviewers.map((interviewer) => <InterviewerListItem interviewer={interviewer}/>)
  return ( 
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
    {interviewers.map((interviewer) => <InterviewerListItem 
      key={interviewer.id}
      id={interviewer.id}
      avatar={interviewer.avatar}
      name={interviewer.name}
      selected={interviewer.id === props.value}
      setInterviewer={(event) => props.onChange(interviewer.id)}
      />)}


    </ul>
  </section>
      

  )

}
