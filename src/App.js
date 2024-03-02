import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import articleContext from './context/Articale/articleContext';
import { useState } from 'react';
import Usememo from './components/usermemo/usememo';
import Parent from './components/useCallback/parent';
import Posts from './components/Posts/post';
import Article from './components/Article';

function App() {

  const INITIAL_STATE = [
    {
      id: 1,
      title: 'Card Article 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
      id: 2,
      title: 'Card Article 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
      id: 3,
      title: 'Card Article 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
      id: 4,
      title: 'Card Article 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
      id: 5,
      title: 'Card Article 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    }
  ]

  const [ state, setState ] = useState(INITIAL_STATE);
  const [ edit, setEdit ] = useState(false);
  const [editvalues, setEditValues] = useState({});

  //adding
  const ArticleAdd = (obj) => {
    const l = state.length;
    obj.id= l+1;
    setState(state.concat(obj));
  }

  //Delete

  const ArticleDelete = (id) => {
    const filterArray = state.filter(element => element.id !== id);
    setState(filterArray);
  }

  //Edit

  const EditValues = (id) => {
    const editArray = state.filter(element => element.id === id);
    setEditValues(...editArray);
    setEdit(true);
  }

  //Update 

  const EditArticle = (edit) => {
    const index = state.findIndex(obj => obj.id === edit.id);
    state[index].title = edit.title;
    state[index].description = edit.description;
    setState([...state])
    setEdit(false);
    console.log(state);
  }

  return (
    <div className="App">
      <articleContext.Provider value={{state, ArticleAdd, ArticleDelete, EditValues, editvalues, edit, EditArticle}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/usememo" Component={Usememo} />
            <Route path="/usecallback" Component={Parent} />
            <Route path="/usereducer" Component={Posts} />
            <Route path='/article' Component={Article} />
          </Routes>
        </Router>
      </articleContext.Provider>
    </div>
  );
}

export default App;
