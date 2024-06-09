import  { Link, Route, Routes} from 'react-router-dom'
import FeedbackList from '../src/component/FeedbackList';
import FeedbackPage from '../src/component/FeedbackPage';
import './App.css'


function App() {
 
  return (
    <>
     <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/'>FeedbackPage</Link>
     <Link to='/feedbackList'>FeedbackList</Link>
      </nav>

    <Routes>
        <Route path='/' element={<FeedbackPage/>}/>
        <Route path='/feedbackList' element={<FeedbackList/>}/>
      </Routes>
    </>
 
  )
}

export default App;
