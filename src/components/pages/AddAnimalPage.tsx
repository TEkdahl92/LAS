import React, { useState } from 'react';
import axios from 'axios';

interface Animal {
  name: string;
  type: string;
  age: number;
}

const AddAnimalsPage: React.FC = () => {
  const [animal, setAnimal] = useState<Animal>({ name: '', type: '', age: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnimal((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('/api/animals', animal);
      alert('Animal added successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={animal.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Type:
        <input type="text" name="type" value={animal.type} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={animal.age} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Animal</button>
    </form>
  );
};

export default AddAnimalsPage;