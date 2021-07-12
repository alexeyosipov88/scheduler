import React from "react";

import Header from "./Header";

import Show from "./Show";

import Form from "./Form";

import Empty from "./Empty";

import useVisualMode from "helpers/hooks/useVisualMode";

import 'components/Appointment/styles.scss';
import Status from "./Status";
import Confirm from "./Confirm";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const EDIT = "EDIT";

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

    function onDelete() {
      transition(DELETE);
      props.cancelInterview(props.id)
        .then(() => transition(EMPTY));
    }
  
  
  return (

    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE) } />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => {transition(CONFIRM)}}
          onEdit={() => {transition(EDIT)}}
        />
      )}
      {mode === CREATE && < Form bookInterview={props.bookInterview} onSave={save} interviewers={props.interviewers} onCancel={() => back()}/>}
      {mode === SAVING && < Status message="Saving"/>}
      {mode === DELETE && < Status message="Deleting"/>}
      {mode === CONFIRM && < Confirm onCancel={() => {back()}} onConfirm={() => {onDelete()} }/>}
      {mode === EDIT && <Form name={props.interview.student} interviewer={props.interview.interviewer.id} bookInterview={props.bookInterview} onSave={save} interviewers={props.interviewers} onCancel={() => back()}/>}
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
