import React from "react";
import Box from "./Box";
import boxes from "./boxes"

export default function App(){
  
  const [squares, squareElements] = React.useState(boxes)
  
  squareElements = squares.map(square => (
    <Box key = {square.id}/>
  ))

  return(
    <div>
      {squareElements}
    </div>
  )

}