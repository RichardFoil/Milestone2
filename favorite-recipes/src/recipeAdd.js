import { useEffect, useState } from 'react';
import react from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddRecipe() {
    const [title, setTitle]= useState('')
    const [body, setBody] = useState('')
    const [recipes, setRecipes] = useState([])

    const save = async () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
            body: body
          })
        };

        const data = await fetch('/recipes', requestOptions)
        const cleanData = await data.json()
        console.log('We saved the recipes!', cleanData)
        
      }
      <div className="formContainer">
      <p style={{textAlign: 'left'}}>Title</p>
      <input onChange={(e)=>{setTitle(e.target.value)}}style={{display: 'block'}}></input>
      <p style={{textAlign: 'left'}}>Body</p>
      <textarea onChange={(e)=>{setBody(e.target.value)}} style={{display: 'block'}}></textarea>
      <button className={'saveButton'} onClick={save}>Save</button>
  </div>


    
    //convert to use in  a middleware libary thasts has a function that 
    //returns a (DTO) Data Transfer Object 

    // state for each thing in the form!! to keep track of what they r typign for each field on the form

    // Save function!! who is gonna do the fetch with the body whenever we click the save function

    return (

        <Form action="/recipes" method="POST">
            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGirdChefName">
                    <Form.Label>Chef Name: </Form.Label>
                    <Form.Control type="name" placeholder="Chef's name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRecipeName">
                    <Form.Label>Recipe Name: </Form.Label>
                    <Form.Control type="text" placeholder="Recipe Name" />
                </Form.Group>
            </Row>
            <Row className="mb-3 directions">
                <Form.Group className="mb-3 ingredients" controlId="formGridIngredients">
                    <Form.Label>Ingredients Needed: </Form.Label>
                    <Form.Control type="text" placeholder="Ingredients" />
                </Form.Group>

                <Form.Group className="mb-3 instructions" controlId="formGridInstructions">
                    <Form.Label>Instructions: </Form.Label>
                    <Form.Control type="text" placeholder="Instructions" />
                </Form.Group>
            </Row>
            <Row className="mb-3 allergies">

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Vegan" />
            </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Vegitarian" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Peanuts" />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Gluten Free" />
                </Form.Group>
            </Row>

            <Row className="mb-3 TypeOfMeal">
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Breakfast" />
                </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Dinner" />
            </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Dessert" />
                </Form.Group>
            </Row>

            <Button className="button" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default AddRecipe