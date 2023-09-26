import Account from "./components/Account/Account"
import Follow from "./components/Follow/Follow"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"
import Polls from "./components/Polls/Polls"
import Profile from "./components/Profile/Profile"
import Question from "./components/Question/Question"

function App() {

  return (
    <div className="bg-slate-100 flex gap-3 flex-col">
      <Logout />
      <Polls /> 
      <Login />
       <Account />
       <Follow />
      <Profile />
      <Question />
    </div>
  )
}

export default App
