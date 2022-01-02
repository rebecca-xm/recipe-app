import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.scss';

const App = () => {
  const APP_ID = 'e70c3cd6';
  const APP_KEY = '34eddd5bc2bf412c8b0314b6c5d3f6e9';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');     // <= per evitare il limite di fetch ogni volta che scrivo nella search bar

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      // console.log(data.hits);   //  => hits, recipe, label, calories, image
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);      // <= in questo modo l'useEffect viene eseguito solo quando invio la richiesta di ricerca della ricetta

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   console.log(data.hits);   //  => hits, recipe, label, calories, image
  //   setRecipes(data.hits);
  // };

  const updateSearch = e => {
    setSearch(e.target.value);    // <= valore dell'input
    // console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');      // <= per resettare la barra di ricerca
  };

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='searchForm'>
        <input
          className='searchBar'
          type='text'
          placeholder='Ingredient'
          value={search}
          onChange={updateSearch}
        />
        <button className='searchBtn' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

//* passo le props di recipe al component recipe.jsx

export default App;
