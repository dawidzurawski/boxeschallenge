import React from "react";

export default function Box(props){
  const [mode, setMode] = React.useState(props.on)

  function toggle(){
    setMode(!mode)
  }

  const styles = {
    backgroundColor: mode ? "black" : "white"
  }

  return (
    <div className="box" style={styles} onClick={toggle}></div>
  )
}