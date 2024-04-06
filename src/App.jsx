import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Card from './components/card';
import Counter from './components/counter';

function App() {

  const [count, setCount] = useState(0)
  const incrementar = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementar = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetear = () => {
    setCount(0);
  };

  const animals = [
    {
      name: 'Elefante',
      image: 'https://source.unsplash.com/featured/?elephant',
      text: 'El elefante es el mamífero terrestre más grande del mundo.',
    },
    {
      name: 'Tigre',
      image: 'https://source.unsplash.com/featured/?tiger',
      text: 'El tigre es el felino más grande del mundo y está en peligro de extinción.',
    },
    {
      name: 'León',
      image: 'https://source.unsplash.com/featured/?lion',
      text: 'El león es conocido como el "rey de la selva" y vive en manadas.',
    },
    {
      name: 'Cebra',
      image: 'https://source.unsplash.com/featured/?zebra',
      text: 'La cebra es un animal herbívoro conocido por sus rayas blancas y negras.',
    },
    {
      name: 'Jirafa',
      image: 'https://source.unsplash.com/featured/?giraffe',
      text: 'La jirafa es el animal terrestre más alto y tiene un cuello muy largo.',
    },
    {
      name: 'Oso',
      image: 'https://source.unsplash.com/featured/?bear',
      text: 'El oso es un animal grande y poderoso que vive en diferentes hábitats en todo el mundo.',
    },
  ]; 
  

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {animals.map(a => (
          <Card key={a.name} 
            count={count}
            image={a.image} 
            title={a.name} 
            text={a.text} 
          />
        ))}
      </div>

      <div className="row row-cols-1">
        <Counter count={count} incrementar={incrementar} decrementar={decrementar} resetear={resetear} />
      </div>
      
    </>
  )
}

export default App
