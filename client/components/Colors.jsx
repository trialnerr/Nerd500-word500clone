import React from "react";
import * as actions from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

// export default function Colors() {
//   function ColorGreen() {
//     const dispatch = useDispatch();
//     const colorChangeHandler = () =>
//       console.log('green was clicked');
//       dispatch(actions.changeColorActionCreator("green"));
//     return <button onClick={colorChangeHandler} className="colorBtn green"></button>;
//   }
//   function ColorYellow() {
//     const dispatch = useDispatch();
//     const colorChangeHandler = () =>
//       dispatch(actions.changeColorActionCreator("yellow"));
//     return <button onClick={colorChangeHandler} className="colorBtn yellow"></button>;
//   }

//   function ColorRed() {
//     const dispatch = useDispatch();
//     const colorChangeHandler = () =>
//       dispatch(actions.changeColorActionCreator("red"));
//     return <button onClick={colorChangeHandler} className="colorBtn red"></button>;
//   }

//   function ColorWhite() {
//     const dispatch = useDispatch();
//     const colorChangeHandler = () =>
//       dispatch(actions.changeColorActionCreator("white"));
//     return <button onClick={colorChangeHandler} className="colorBtn white"></button>;
//   }

//   return (
//     <div className="colorsContainer">
//       <div>
//         <h3>ColorPicker</h3>
//         <div className="colorsWrapper">
//           <ColorGreen />
//           <ColorYellow />
//           <ColorRed />
//           <ColorWhite />
//         </div>
//       </div>
//     </div>
//   );
// }

function Colors() {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.game.currentColor);

  function colorChangeHandler(color) {
    dispatch(actions.changeColorActionCreator(color));
  }

  function ColorButton({ color }) {
    return (
      <button
        onClick={() => colorChangeHandler(color)}
        className={`colorBtn ${color}`}
      ></button>
    );
  }

  return (
    <div className="colorsContainer">
      <div>
        <h3 className = {`${currentColor}`}>ColorPicker</h3>
        <div className="colorsWrapper">
          <ColorButton color="green" />
          <ColorButton color="yellow" />
          <ColorButton color="red" />
          <ColorButton color="white" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Colors;
