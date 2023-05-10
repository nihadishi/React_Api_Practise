import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { PostsUser } from './pages/PostsUser';
import ErrorPage from './pages/ErrorPage';
import UsersApp from './selectedpages/UsersApp';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/userPosts/:id' element={<PostsUser/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
    // <Routes>
    //   <Route path='/' element={<UsersApp}></Route>
    // </Routes>
  );
}

export default App;
