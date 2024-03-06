import React from "react";
import Square from "./Square.jsx";

export default function Row({length}){
    const row = []; 
    for (let i = 0; i < length; i++){
        row.push(<Square/>)
    }
    return (
        <div className = "row-container">
            {row}
        </div>
    )
}