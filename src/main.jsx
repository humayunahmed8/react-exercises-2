import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// React Element

// const element = React.createElement('h1', null, 'Hello World'); // null means className
// const element = <h1 className='heading'><p>Hello world</p></h1>;
setInterval(() => {
  const element = (
    <h1 className='heading'>
      <span className='date'>Time : {new Date().toLocaleTimeString()}</span>
    </h1>
  )
  // console.log(element);
  
  // Render
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(element);
}
) 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
