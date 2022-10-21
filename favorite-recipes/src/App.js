
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label> Email address</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Favorite Recipe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
   
  );
}

export default App;
