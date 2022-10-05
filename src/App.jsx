import { useState } from 'react'
import './App.css'

function Link(props) {
  console.log(props)
  const changePath = () => {
    const nextURL = props.to
    const nextTitle = 'My new page title';
    const nextState = { additionalInformation: 'Updated the URL with JS' };
    window.history.pushState(nextState, nextTitle, nextURL);
    props.pathChanged(props.to)
  }
  return <button onClick={changePath}>{props.children}</button>
} 


function App() {
  const [count, setCount] = useState(0)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  const router = () => {
    switch(currentPath) {
      case "/":
        return "HOMEPAGE"
      case "/about":
        return "ABOUT"
      default:
        return "404 :o"
    }
  }

  const pathChanged = (newPath) => {
    setCurrentPath(newPath)
  }

  return (
    <div className="App">
        <br />
        <Link pathChanged={pathChanged} to="/"> homepage </Link>
        <br />
        <Link pathChanged={pathChanged} to="/about"> about </Link>
        <br />
        <br />
        <br />
        <br />
        {router()}      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
