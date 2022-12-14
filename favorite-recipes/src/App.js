import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import RecipeGallery from './recipeGallery';
import AddRecipe from './recipeAdd';
import DeleteRecipe from './recipeDelete';
import UpdateRecipe from './recipeUpdate';
import '../css/style.css'

function App() {
  

  return (
  <div className='App'>
     <h2>Welcome to our database that keeps track of your favorite recipes!</h2>
    <Router>
      <header>
        <div className='NavBar'>
          <h1 className='header'>YOUR FAVORITE RECIPE DATABASE</h1>
          <ul>
            <li>
              <Link className='link' to='/gallery'>RECIPE GALLERY</Link>
            </li>
            <li>
            <Link className='link' to='/add'>RECIPE ADD</Link>
            </li>
            <li>
            <Link className='link' to='/gallery'>RECIPE UPDATE</Link>
            </li>
            <li>
            <Link className='link' to='/gallery'>RECIPE DELETE</Link>
            </li>
          </ul>
        </div>
      </header> 
     <div className='display'>
        <Routes>
          <Route path='/gallery' element={<RecipeGallery />} />
          <Route path='/add' element={<AddRecipe />} />
          <Route path='/update/:id' element={<UpdateRecipe />} />
          <Route path='/delete' element={<DeleteRecipe />} />
        </Routes>
      </div>
    </Router> 
     
  </div>
  )
}

export default App;
