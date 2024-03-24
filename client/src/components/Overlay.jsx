import React from 'react'

const Overlay = (props) => {
  return (
  <div style={{display: 'flex', flexDirection: 'column' ,
   justifyContent: 'center' , alignItems: 'center',
   backgroundColor: 'black',opacity: 0.9,zIndex: 10,width: '100vw',height: '100vh',
   position: 'fixed', top: '0', left: '0'}}>
  {props.children}
  </div>)
}

export default Overlay
