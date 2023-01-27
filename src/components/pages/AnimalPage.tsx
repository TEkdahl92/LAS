import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Animal {
  name: string;
  type: string;
  age: number;
}

const AnimalsPage: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const { data } = await axios.get('/api/animals');
        setAnimals(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div>
      <h2>Animals</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.name}>
              <td>{animal.name}</td>
              <td>{animal.type}</td>
              <td>{animal.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalsPage;
