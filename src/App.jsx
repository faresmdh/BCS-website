import Landing from './Pages/Landing';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Privacy from './Pages/Privacy';
import Agreement from './Pages/Agreement';
import Android from './Pages/Android';
import Source from './Pages/Source';
import Resources from './Pages/Resources';
import { Toaster} from 'react-hot-toast';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Level from './Pages/Level';
import Platform from './Pages/Platform';

function App() {
  return (
    <div className="App">
      <Toaster position='top-left'/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Landing}/>
          <Route exact path='/privacy-policy' Component={Privacy}/>
          <Route exact path='/user-agreement' Component={Agreement}/>
          <Route exact path='/android-app' Component={Android}/>
          <Route exact path='/source-code' Component={Source}/>
          <Route exact path='/resources' Component={Resources}/>
          <Route exact path='/login' Component={Login}/>
          <Route exact path='/register' Component={Register}/>
          <Route exact path='/level' Component={Level}/>
          <Route exact path='/platform/*' Component={Platform}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;