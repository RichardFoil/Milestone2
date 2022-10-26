import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import RecipeGallery from './recipeGallery';
import AddRecipe from './recipeAdd';
import DeleteRecipe from './recipeDelete';
import UpdateRecipe from './recipeUpdate';

function App() {
  
  return (
  <div className='App'>
    <h1> HELLLOO!</h1>
     <h2>The point of our database is to be able to share your favorite recipes with others!visit the existing recipe gallery or add your recipe now!</h2>
    <BrowserRouter>
      <header>
        <div className='navBar'>
          <h1>OUR FAVORITE RECIPE DATABASE</h1>
          {/* <ul>
            <li>
              <Link to='/'>HOME PAGE</Link>
            </li>
            <li>
              <Link to='/gallery'>RECIPE GALLERY</Link>
            </li>
            <li>
            <Link to='/add'>RECIPE ADD</Link>
            </li>
            <li>
            <Link to='/update'>RECIPE UPDATE</Link>
            </li>
            <li>
            <Link to='/delete'>RECIPE DELETE</Link>
            </li>
          </ul> */}
        </div>
      </header> 
     <div className='display'>
        {/* <Routes>
          <Route path='/gallery' element={<RecipeGallery />} />
          <Route path='/add' element={<AddRecipe />} />
          <Route path='/update' element={<UpdateRecipe />} />
          <Route path='/delete' element={<DeleteRecipe />} />
        </Routes> */}
      </div>
    </BrowserRouter> 
    
  </div>
  )
}

export default App;
