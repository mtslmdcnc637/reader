import './App.css';
import Begin from './components/Begin';
import VerifyPreviousText from './components/VerifyPreviousText';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'



function App() {
  const text = localStorage.getItem("text")
  return (
    <VerifyPreviousText/>

  )


}

export default App;
