import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css'
import Page from './components/loginPage/loginPage'
import Options from './components/options/option'
import Profile from './components/profile/profile'
import Claim from './components/claimCreation/claimCreation'

function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
     <Route path="/login" component={Page}/>
     <Route path="/option" component={Options}/>
     <Route path="/profile" component={Profile}/>
     <Route path="/claimcreation" component={Claim}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
