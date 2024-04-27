import React from 'react';
import { useDispatch } from 'react-redux';
import { resetRow } from '../reducers/gameReducers';


export default function Reset({ resetRowId }) {
  const dispatch = useDispatch();
  function handleClick() {
    return dispatch(resetRow(resetRowId));
  }
  return (
    <button onClick = {handleClick} className="reset">
      <span className="button-text">reset</span>
    </button>
  );
}
