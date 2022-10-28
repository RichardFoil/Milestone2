import react from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddRecipe() {
    return (
        <Form>
            <Row className="mb-3 NamePart">
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