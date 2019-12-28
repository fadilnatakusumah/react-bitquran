import React from "react";
import { PulseLoader } from "react-spinners";

function Spinner() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'inline-block',
        padding: '30px'
      }}>
        <PulseLoader
          color={"green"}
          size={20}
          loading={true}
        />
      </div>
    </div>
  )
}

export default Spinner
