import AdminPanel from './Models/Admin/AdminPanel';
import Landing from './Models/Landing';
import Layout from './Models/Layout';
import Newsearch from './Models/Newsearch';
import PageNofound from './Models/PageNofound';
import SignUp from './Models/SignUp';
import Signin from './Models/Signin';
import StoreAdminPanel from './Models/Store/StoreAdminPanel';
import StoreLogin from './Models/Store/StoreModels/StoreLogin';
import Unauthorize from './Models/Unauthorize';
import RequireAuth from './RequireAuth'
import {Routes,Route, Outlet, Router} from 'react-router-dom'
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
      <Route path='/' element={<Layout/>}> 
        {/* Public */}
        {/* <Route path='/' element={<Newsearch/>}/>  */}
        <Route path='/' element={<Landing/>}/>
        
       <Route path='/signin' element={<Signin/>}/> 
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/unauthorize' element={<Unauthorize/>}/>
        <Route path='/storelogin' element={<StoreLogin/>}/> 
        {/* protect */}
          <Route element={<RequireAuth allowedRoles={'Admin'}/>}>
            <Route path="/admin" element={<AdminPanel />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={'Store'}/>}>
        <Route path='/store' element={<StoreAdminPanel/>}/>  
        </Route>
        <Route element={<RequireAuth allowedRoles={'Consumer'}/>}>
        <Route path='/home' element={<Newsearch/>}/>  
        </Route>
        
      <Route path='*' element={<PageNofound/>}/>
      </Route>
      </Routes>
     
      {/* <Landing/> */}
    </div>
  );
}

export default App;
