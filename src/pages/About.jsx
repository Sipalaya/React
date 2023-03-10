import { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Card, Button, Form } from 'react-bootstrap';

export default function About() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(text) => setEmail(text.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(text) => setPassword(text.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            console.log(email, password);
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
