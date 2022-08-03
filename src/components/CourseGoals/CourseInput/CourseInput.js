import React, { useState } from 'react';

import Button from '../../UI/Button';
import formStyle from './CourseInput.module.css';
import ErrorModal from '../../UI/ErrorModal';
//import Wrapper from '../../Helpers/Wrapper';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid goal , empty goal empty man baby',
      });

      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      
    <form onSubmit={formSubmitHandler}>
      <div className={ `${formStyle['form-control']} ${!isValid && formStyle.invalid}`}>
        <label>Course Goal</label>
        <input type="text" 
        value = {enteredValue}
        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
    </React.Fragment>
  );
};

export default CourseInput;