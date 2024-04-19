import React from 'react';
import * as actions from '../actions/actions';
import { useDispatch } from 'react-redux';


export default function ResetBoard({ resetRowId }) {
  const dispatch = useDispatch();
  function handleClick() {
    return dispatch(actions.resetRowActionCreator(resetRowId));
  }
  return (
    <button onClick = {handleClick} className="reset">
      <span className="button-text">reset</span>
    </button>
  );
}
