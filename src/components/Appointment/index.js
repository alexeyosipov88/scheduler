import React from "react";

import Header from "./Header";

import Show from "./Show";

import Form from "./Form";

import Empty from "./Empty";

import useVisualMode from "helpers/hooks/useVisualMode";

import 'components/Appointment/styles.scss';
import Status from "./Status";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(()=> transition(SHOW))
   
  }
  
  return (

    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE) } />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && < Form bookInterview={props.bookInterview} onSave={save} interviewers={props.interviewers} onCancel={() => back()}/>}
      {mode === SAVING && < Status/>}
    </article>)


  // {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
  // {mode === SHOW && (
  //   <Show
  //     student={props.interview.student}
  //     interviewer={props.interview.interviewer}
  //   />
  // )}

  // return (
  //   <article className="appointment">
  //     <Header time={props.time} />
  //     {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}
  //   </article>)
}
