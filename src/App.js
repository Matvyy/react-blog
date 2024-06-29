import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import "./App.css"

const App = () => {
  return(
    <div className="appWrapper">
      <header className="header">
        <Header/>
      </header>
      
      <div className="navbar">
        <NavBar/>
      </div>
      
      <div className="content">
        <Profile/> 
      </div>
      
    </div>
  )
}



export default App