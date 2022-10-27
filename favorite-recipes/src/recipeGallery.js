import {useState} from 'react';


function RecipeGallery() {
    const [state, setState] = useState([])
    const getData = async () => {
        console.log('We got clicked!!')
    const data = await fetch ("/recipes")
    console.log('data label hahaha!', data)
    const cleanData = await data.json()

        console.log('clean data', cleanData)
        setState(cleanData)
    }

    console.log('State !!!!!!!!!', state)

    return(

        <div>
            <button onClick={getData}>Grab recipes!</button>
            {state.map((eachThing)=> {
                return (
                    <h1>{eachThing.title}</h1>
                )
            })}
        
        </div>
    );

}    

export default RecipeGallery