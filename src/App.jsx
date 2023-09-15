import Account from "./components/Account/Account"
import Follow from "./components/Follow/Follow"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"
import Polls from "./components/Polls/Polls"
import Profile from "./components/Profile/Profile"

function App() {

  return (
    <div>
      <Logout />
      <Polls />
      <Login />
      <Account />
      <Follow />
      <Profile />
    </div>
  )
}

export default App
