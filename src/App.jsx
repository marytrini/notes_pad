import './App.css';
import {Routes, Route} from "react-router-dom";
import NotesList from './pages/notes/ListNotes';
import CreateNote from './pages/notes/CreateNote';
import Home from "../src/pages/Home"
import ArchivedList from "../src/pages/archived/ArchivedNote"
import ActiveList from "../src/pages/active/ActiveNote"
import EditNotes from './pages/edit/EditNote';

function App() {
  return (
    <div className="App bg-custom-bg bg-contain bg-center h-screen">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/notes' element={<NotesList />}/>
        <Route path='/notes/create' element={<CreateNote />}/>
        <Route path='/archived' element={<ArchivedList />} />
        <Route path='/active' element={<ActiveList />} />
        <Route path='/edit/:id' element={<EditNotes />} />
      </Routes>
    </div>
  );
}

export default App;