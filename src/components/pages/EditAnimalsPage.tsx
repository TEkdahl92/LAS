import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Animal {
  name: string;
  type: string;
  age: number;
}

interface Props {
  animalId: string;
}

const EditAnimalsPage: React.FC<Props> = ({ animalId }) => {
  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const { data } = await axios.get(`/api/animals/${animalId}`);
        setAnimal(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAnimal();
  }, [animalId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.patch(`/api/animals/${animalId}`, animal);
    } catch (err) {
      console.error(err);
    }
  };

  if (!animal) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Animal</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={animal.name}
          onChange={(e) => setAnimal({ ...animal, name: e.target.value })}
        />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          value={animal.type}
          onChange={(e) => setAnimal({ ...animal, type: e.target.value })}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={animal.age}
          onChange={(e) => setAnimal({ ...animal, age: e.target.value })}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditAnimalsPage;
