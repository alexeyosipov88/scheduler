import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  const [error, setError] = useState("");
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  const reset = () => {
    setName("");
    setInterviewer(null);
  }

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    
    props.onSave(name, interviewer);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }
  // const save = () => {
  //   const interview = props.onSave(name, interviewer);
  //   props.bookInterview(props.id, interview);
  // }

  return (

    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
            placeholder="Enter Student Name"
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()} >Save</Button>
        </section>
      </section>
    </main>


  )

}
