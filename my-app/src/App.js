import React from "react";
import Box from "./Box";
import boxes from "./boxes"

export default function App(){
  
  const [squares, setSquares] = React.useState(boxes)
  
  squareElements = squares.map(square => (
    <Box key={square.id} on={square.on}/>
  ))

  return(
    <div>
      {squareElements}
    </div>
  )

}