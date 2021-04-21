import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css'
import Page from './components/loginPage'

function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
     <Route path="/login" component={Page}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
