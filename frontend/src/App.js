import AdminPanel from './Models/Admin/AdminPanel';
import Home from './Models/Home';
// import Layout from './Models/Layout';
import Newsearch from './Models/Newsearch';
import SignUp from './Models/SignUp';
import Signin from './Models/Signin';
import Store from './Models/Store/Store';


import Unauthorize from './Models/Unauthorize';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import RequireAuth from './RequireAuth'
import {BrowserRouter,Routes,Route, Outlet, Router} from 'react-router-dom'
const Roles = {
  'Admin': 'Admin',
  'Store': 'Store',
  'Consumer': 'Consumer'
};
const current_role=Roles
function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path='/' element={<Outlet/>}>
        <Route index element={<Newsearch/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/unauthorize' element={<Unauthorize/>}/>
        
        <Route element={<RequireAuth allowedRoles={['Admin']} />}>
                 <Route path="/admin" element={<AdminPanel />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={['Consumer']} />}>
                 <Route path="/" element={<Newsearch />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={['Store']} />}>
                 <Route path="/store" element={<Store />} />
      </Route>
      {/* <Route element={<ProtectedRoute allowedRoles={['Store']} />}>
      <Route path="/store" element={<Store />} />
      
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['Consumer']} />}>
      <Route path="/" element={<Newsearch />} />
      
      </Route> */}
      </Route>
      </Routes>
     
      {/*    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Newsearch/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/admin' element={<AdminPanel/>}/>
      </Routes>
      </BrowserRouter> */}
         {/* <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
      <Route path="/admin" element={<AdminPanel />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["Store"]} />}>
      <Route path="/store" element={<Store />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["Consumer"]} />}>
      <Route path="/" element={<Newsearch  />} />
      </Route> */}
    </div>
  );
}

export default App;
