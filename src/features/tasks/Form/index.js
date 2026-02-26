import { useState, useRef } from "react";
import { Button, Input, StyledForm } from "./styled";

import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        id: Date.now(),
        content: trimmedNewTaskContent,
        done: false,
      }),
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <>
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          ref={inputRef}
          value={newTaskContent}
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />

        <Button>Dodaj zadanie</Button>
      </StyledForm>
    </>
  );
};

export default Form;
