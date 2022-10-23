import { BrowserRputer as Router, Link, Route } from 'react-router-dom'

import recipeGallery from './recipeGallery';
import addRecipe from './recipeAdd';
import deleteRecipe from './recipeDelete';
import updateRecipe from './recipeUpdate';

function App() {
  return <div className='App'>
    <Router>
      <header>
        <div className='navBar'>
          <ul>
            <li>
              <Link to='/gallery'>Recipe Gallery</Link>
            </li>
            <li>
            <Link to='/add'>Recipe Add</Link>
            </li>
            <li>
            <Link to='/update'>Recipe Update</Link>
            </li>
            <li>
            <Link to='/delete'>Recipe Delete</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className='display'>
        <Routes>
          <Route path='/gallery' element={<recipeGallery />} />
          <Route path='/add' element={<addRecipe />} />
          <Route path='/update' element={<updateRecipe />} />
          <Route path='/delete' element={<deleteRecipe />} />
        </Routes>
      </div>
    </Router>
  </div>
}

export default App;
