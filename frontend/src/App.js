
import AdminPanel from './Models/Admin/AdminPanel';
import Home from './Models/Home';
import Newsearch from './Models/Newsearch';
import SignUp from './Models/SignUp';
import Signin from './Models/Signin';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Newsearch/> */}
      {/* <Signin/> */}
      {/* <SignUp/> */}
      {/* <AdminPanel/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Newsearch/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
