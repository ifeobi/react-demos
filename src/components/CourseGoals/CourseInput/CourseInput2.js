import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [inputisValid, setInputIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputIsValid(true);
    }
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsTouched(true);

    if (enteredValue.trim().length === 0) {
      setInputIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    reset();
  };

  const inputIsInvalid = !inputisValid && isTouched;

  const BlurHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsTouched(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          inputIsInvalid && styles.invalid
        }`}
      >
        <label>Daily Goals</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          onBlur={BlurHandler}
        />
        {inputIsInvalid && <p>Please provide a valid input</p>}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
