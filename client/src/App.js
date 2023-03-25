import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import DisplayAll from './components/DisplayAll';
import EditForm from './components/EditForm';
import ViewOne from './components/ViewOne';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/new" element={<Form/>} default/>
        <Route path="/displayAll" element={<DisplayAll/>} />
        <Route path="/edit/:id" element={<EditForm/>} />
        <Route path="/view/:id" element={<ViewOne/>} />

        
      </Routes>
    </div>
  );
}

export default App;
