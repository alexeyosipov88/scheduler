import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    props.onCancel();

  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
        interviewers={props.interviewers}
        onChange={setInterviewer}
        value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => cancel()} danger>Cancel</Button>
          <Button onClick={() => props.onSave(student, interviewer)} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;

// export default function Form(props) {

//   const [error, setError] = useState("");
//   const [name, setName] = useState(props.name || "");
//   const [interviewer, setInterviewer] = useState(props.interviewer || null);

//   const reset = () => {
//     setName("");
//     setInterviewer(null);
//   }

//   function validate() {
//     if (name === "") {
//       setError("Student name cannot be blank");
//       return;
//     }
//     if (!interviewer) {
//       setError("Please select an interviewer");
//       return;
//     }

//     props.onSave(name, interviewer);
//   }

//   const cancel = () => {
//     reset();
//     props.onCancel();
//   }

//   return (

//     <main className="appointment__card appointment__card--create">
//       <section className="appointment__card-left">
//         <form onSubmit={event => event.preventDefault()} autoComplete="off">
//           <input
//             className="appointment__create-input text--semi-bold"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             name="name"
//             type="text"
//             placeholder="Enter Student Name"
//             data-testid="student-name-input"
//           />
//         </form>
//         <section className="appointment__validation">{(!name || !interviewer) &&  error}</section>
//         <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
//       </section>
//       <section className="appointment__card-right">
//         <section className="appointment__actions">
//           <Button danger onClick={cancel}>Cancel</Button>
//           <Button confirm onClick={() => validate()} >Save</Button>
//         </section>
//       </section>
//     </main>

//   )

// }
