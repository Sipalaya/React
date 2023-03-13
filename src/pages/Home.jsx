import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const fetchCourses = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await resp.json();
    setData(todos);
  };
  return (
    <>
      <h1>This is a Home Page</h1>
      <Button variant='primary' onClick={fetchCourses}>
        Button
      </Button>
      <Button variant='secondary' onClick={() => console.log(data)}>
        Show Data
      </Button>
      <div>
        {data.map((d) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{d.userId}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {d.title}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}
