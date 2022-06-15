
import React from "react";
import Header from "./Header";
import Show from "./Show";

// import Form from "./Form";

import Empty from "./Empty";

// import Error from "./Error";
  // import Status from "./Status";
  // import Confirm from "./Confirm";

// import useVisualMode from "helpers/hooks/useVisualMode";

import 'components/Appointment/styles.scss';




const Appointment = ({time, interview}) => {

    return (
      <article className="appointment">
        <Header time={time}/>
        {interview ? <Show student={interview.student} interviewer={interview.interviewer}/> : <Empty/>}
      </article>

    )
}


export default Appointment;


// export default function Appointment(props) {
  
//   const EMPTY = "EMPTY";
//   const SHOW = "SHOW";
//   const CREATE = "CREATE";
//   const SAVING = "SAVING";
//   const CONFIRM = "CONFIRM";
//   const DELETE = "DELETE";
//   const EDIT = "EDIT";
//   const ERROR_SAVE = "ERROR_SAVE";
//   const ERROR_DELETE = "ERROR_DELETE";

//   const { mode, transition, back } = useVisualMode(
//     props.interview ? SHOW : EMPTY
//   );
  
//   function save(name, interviewer) {
//     const interview = {
//       student: name,
//       interviewer
//     };
  
//     transition(SAVING);
//     const bookInterviewPromise = mode === 'EDIT' ? props.bookInterview(props.id, interview, true) : props.bookInterview(props.id, interview)
//     bookInterviewPromise
//       .then(()=> transition(SHOW))
//       .catch(() => transition (ERROR_SAVE, true))
    
//   }

//     function onDelete() {
//       transition(DELETE, true);
//       props.cancelInterview(props.id)
//         .then(() => transition(EMPTY))
//         .catch(() => transition(ERROR_DELETE, true))
//     }
//   return (

//     <article data-testid="appointment" className="appointment">
//       <Header time={props.time} />
//       {mode === EMPTY && <Empty onAdd={() => transition(CREATE) } />}
//       {mode === SHOW && (
//         <Show
//           student={props.interview.student}
//           interviewer={props.interview.interviewer}
//           onDelete={() => {transition(CONFIRM)}}
//           onEdit={() => {transition(EDIT)}}
//         />
//       )}
//       {mode === CREATE && < Form bookInterview={props.bookInterview} onSave={save} interviewers={props.interviewers} onCancel={() => back()}/>}
//       {mode === SAVING && < Status message="Saving"/>}
//       {mode === DELETE && < Status message="Deleting"/>}
//       {mode === CONFIRM && < Confirm message="Are you sure would like to delete?" onCancel={() => {back()}} onConfirm={() => {onDelete()} }/>}
//       {mode === EDIT && <Form name={props.interview.student} interviewer={props.interview.interviewer && props.interview.interviewer.id} bookInterview={props.bookInterview} onSave={save} interviewers={props.interviewers} onCancel={() => back()}/>}
//       {mode === ERROR_SAVE && <Error onClose={() => {back()}} message={"Could not save an appontment"}/>}
//       {mode === ERROR_DELETE && <Error onClose={() => {back()}} message={"Could not cancel an appointment"}/>}
//     </article>)


 
// }
