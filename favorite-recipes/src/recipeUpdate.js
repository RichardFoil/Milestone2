

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateRecipe({ recipe }) {
  const [state, setState] = useState([]);
  const [chef, setChef] = useState("")
  const [dish, setDish] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  const [hasGluten, setHasGluten] = useState(false)
  const [hasPeanuts, setHasPeanuts] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegitarian, setIsVegitarian ] = useState(false)
  const [isBreakfast, setIsBreakfast] = useState(false)
  const [isDinner, setIsDinner] = useState(false)
  const [isDessert, setIsDesset] = useState(false)


  const {id} = useParams()
  console.log('id!', id)

  const getData = async () => {
    const data = await fetch("/recipes/" + id);

    console.log("data label hahaha!", data);
    const cleanData = await data.json();

    console.log("clean data", cleanData);
    setState(cleanData);
  };

  useEffect(()=> {
    getData()
  }, []);


 
  console.log("update !!!!!!!!!", state);
  console.log(state);

  const update = async () => {
    const requestOptions = {
      method: 'PUT',
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
    const data = await fetch(`/recipes/${id}/update`, requestOptions)
    const cleanData = await data.json()
    console.log('We updated!', cleanData)
    getData()
  }
  return (
    
    <Form action="/" method="POST">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGirdChefName">
          <Form.Label>Chef Name:</Form.Label>
          <Form.Control onChange={(e) => setChef(e.target.value)} type="name" defaultValue={state.chef} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridRecipeName">
          <Form.Label>Recipe Name:</Form.Label>
          <Form.Control onChange={(e) => setDish(e.target.value)} type="text" defaultValue={state.dish} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridIngredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control onChange={(e) => setIngredients(e.target.value)} type="text" defaultValue={state.ingredients} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridInstructions">
        <Form.Label>Instructions</Form.Label>
        <Form.Control onChange={(e) => setInstructions(e.target.value)} type="text" defaultValue={state.instructions} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={(e) => setIsVegan(!isVegan)}
            type="checkbox"
            label="Vegan"
            defaultChecked={state.isVegan}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={(e) => setIsVegitarian(!isVegitarian)}
            type="checkbox"
            label="Vegitarian"
            defaultChecked={state.isVegitarian}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={(e) => setHasPeanuts(!hasPeanuts)}
            type="checkbox"
            label="Peanuts"
            defaultChecked={state.hasPeanuts}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={(e) => setHasGluten(!hasGluten)}
            type="checkbox"
            label="Gluten Free"
            defaultChecked={state.hasGluten}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
          onChange={(e) => setIsBreakfast(!isBreakfast)}
            type="checkbox"
            label="Breakfast"
            defaultChecked={state.isBreakfast}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={(e) => setIsDinner(!isDinner)}
            type="checkbox"
            label="Dinner"
            defaultChecked={state.isDinner}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            onChange={(e) => setIsDesset(!isDessert)}
            type="checkbox"
            label="Dessert"
            defaultChecked={state.isDessert}
          />
        </Form.Group>
      </Row>

      <Button onClick={update} variant="primary" type="update">
        Update
      </Button>
    </Form>
  );
}

export default UpdateRecipe;
