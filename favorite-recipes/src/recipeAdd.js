
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function AddRecipe() {

    const [chef, setChef] = useState("")
    const [dish, setDish] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    const [hasGluten, setHasGluten] = useState(false)
    const [hasPeanuts, setHasPeanuts] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegitarian, setIsVegitarian] = useState(false)
    const [isBreakfast, setIsBreakfast] = useState(false)
    const [isDinner, setIsDinner] = useState(false)
    const [isDessert, setIsDesset] = useState(false)
    const [recipes, setRecipes] = useState([])

    console.log('STATE for chef!', isDessert)

    const grabRecipes = async () => {
        const recipes = await fetch('/recipes')
        const cleanRecipe = await recipes.json()
        setRecipes(cleanRecipe)
    }

    const save = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                chef: chef,
                dish: dish,
                ingredients: ingredients,
                instructions: instructions,
                hasGluten: hasGluten,
                hasPeanuts: hasPeanuts,
                isVegan: isVegan,
                isVegitarian: isVegitarian,
                isBreakfast: isBreakfast,
                isDinner: isDinner,
                isDessert: isDessert,

            })
        };
        const data = await fetch('/recipes', requestOptions)
        const cleanData = await data.json()
        console.log('We saved!', cleanData)
        grabRecipes()
    }

    useEffect(() => {
        grabRecipes()
    }, [])



    return (
        <Form action="/gallery" method="GET">
            <Row className="mb-3 NamePart">

                <Form.Group as={Col} controlId="formGirdChefName">

                    <Form.Label>Chef Name:</Form.Label>
                    <Form.Control onChange={(e) => setChef(e.target.value)} type="name" placeholder="Chef's name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRecipeName">
                    <Form.Label>Recipe Name:</Form.Label>
                    <Form.Control onChange={(e) => setDish(e.target.value)} type="text" placeholder="Recipe Name" />

                </Form.Group>
            </Row>
            <Row className="mb-3 directions">

 <Form.Group className="mb-3 ingredients" controlId="formGridIngredients">
                    <Form.Label>Ingredients Needed: </Form.Label>
                    <Form.Control type="text" placeholder="Ingredients" />
                </Form.Group>

                <Form.Group className="mb-3 instructions" controlId="formGridInstructions">
                    <Form.Label>Instructions: </Form.Label>
                    <Form.Control onChange={(e) => setInstructions(e.target.value)} type="text" placeholder="Instructions" />
                </Form.Group>
            </Row>

            <Row className="mb-3 allergies">

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setIsVegan(!isVegan)} type="checkbox" label="Vegan" />
                </Form.Group>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setIsVegitarian(!isVegitarian)} type="checkbox" label="Vegitarian" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setHasPeanuts(!hasPeanuts)} type="checkbox" label="Peanuts" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setHasGluten(!hasGluten)} type="checkbox" label="Gluten Free" />
                </Form.Group>
            </Row>

            <Row className="mb-3 TypeOfMeal">
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setIsBreakfast(!isBreakfast)} type="checkbox" label="Breakfast" />
                </Form.Group>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setIsDinner(!isDinner)} type="checkbox" label="Dinner" />
                </Form.Group>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check onChange={(e) => setIsDesset(!isDessert)} type="checkbox" label="Dessert" />
                </Form.Group>
            </Row>

            <Button className='button' onClick={save} variant="primary" type="submit">

                Submit
            </Button>
        </Form> 
        )
    }
    

export default AddRecipe;