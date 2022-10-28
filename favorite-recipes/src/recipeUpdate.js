import react from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function UpdateRecipe({recipe}) {
    return (
        <Form action={`/recipes/${recipe._id}?_method=PUT`} method="POST">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGirdChefName">
                <Form.Label>Chef Name:</Form.Label>
                <Form.Control type="name" placeholder="Chef's name" defaultValue={recipe.chef} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRecipeName">
                <Form.Label>Recipe Name:</Form.Label>
                <Form.Control type="text" placeholder="Recipe Name" defaultValue={recipe.dish} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridIngredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control type="text" placeholder="Ingredients" defaultValue={recipe.ingredients} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridInstructions">
                <Form.Label>Instructions</Form.Label>
                <Form.Control  type="text" placeholder="Instructions" defaultValue={recipe.instructions} />
            </Form.Group>

            <Row className="mb-3">
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Vegan" defaultChecked={recipe.isVegan} />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Vegitarian" defaultChecked={recipe.isVegitarian}/>
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Peanuts" defaultChecked={recipe.hasPeanuts} />
            </Form.Group>
            
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Gluten Free" defaultChecked={recipe.hasGluten}/>
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Breakfast" defaultChecked={recipe.isBreakfast} />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Dinner"  defaultChecked={recipe.isDinner}/>
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Dessert" defaultChecked={recipe.isDessert} />
            </Form.Group>
            </Row>

            <Button variant="primary" type="update">
                Update
            </Button>
        </Form>
    )
}

export default UpdateRecipe