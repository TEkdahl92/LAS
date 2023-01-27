import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AnimalPage, AddAnimalPage, EditAnimalsPage } from './components/pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<HomePage/>} />
        <Route path="/animals" component={<AnimalPage/>} />
        <Route path="/add-animals" component={<AddAnimalPage/>} />
        <Route path="/edit-animals/:id" component={<EditAnimalsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;