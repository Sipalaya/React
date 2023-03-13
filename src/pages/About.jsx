import { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Card, Button, Form } from 'react-bootstrap';

export default function About() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(0);
  const submitPosts = async (e) => {
    e.preventDefault();
    console.log(id, userId, title, body);
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          userId,
          title,
          body,
        }),
      });
      const data = await resp.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deletePosts = async (e) => {
    e.preventDefault();
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
    console.log(await resp.json());
  };
  return (
    <Form style={{ width: '350px', padding: 30 }}>
      <Form.Group className='mb-3' controlId='formId'>
        <Form.Label>User ID</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter ID'
          onChange={(e) => setId(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formUserId'>
        <Form.Label>User ID</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter User ID'
          onChange={(e) => setUserId(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Posts Title'
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBody'>
        <Form.Label>Body</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Body'
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>

      <Button variant='primary' type='submit' onClick={submitPosts}>
        Submit
      </Button>

      <Button variant='danger' type='submit' onClick={deletePosts}>
        Delete
      </Button>
    </Form>
  );
}
