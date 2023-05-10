import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { PostsUser } from './pages/PostsUser';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id/posts' element={<PostsUser/>}/>
      </Routes>
    </>
  );
}

export default App;
