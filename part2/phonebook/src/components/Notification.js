import React from 'react';

const Notification = ({ message, errorMessage }) => {
  return (
    <div>
      {message 
      ? <div className="success">{message}</div>
      : <div className="error">{errorMessage}</div>
      }
    </div>
  )
}

export default Notification