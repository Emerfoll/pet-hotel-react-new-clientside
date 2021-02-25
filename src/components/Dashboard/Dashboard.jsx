import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const pets = useSelector((store) => store.petsReducer);
  const owners = useSelector((store) => store.ownersReducer);

  console.log('pets:', pets);
  console.log('owners:', owners);

  const [pet, setPetName] = useState('');
  const [color, setPetColor] = useState('');
  const [breed, setPetBreed] = useState('');
  const [owner_id, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted pet', pet);
    const petTooAdd = {
      pet,
      color,
      breed,
      owner_id,
    };
    console.log(petTooAdd);
    dispatch({ type: 'ADD_PET', payload: petTooAdd });
  };

  useEffect(() => {
    // dispatch({ type: 'FETCH_PETS' });
    // dispatch({ type: 'FETCH_OWNERS' });
    dispatch({ type: 'FETCH_BOTH' });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Add Pet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pet Name"
          value={pet}
          onChange={(event) => setPetName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Pet Color"
          value={color}
          onChange={(event) => setPetColor(event.target.value)}
        />
        <input
          type="text"
          placeholder="Pet Breed"
          value={breed}
          onChange={(event) => setPetBreed(event.target.value)}
        />

        <select
          name="selectOwner"
          id="selectOwner"
          value={owner_id}
          onChange={(event) => {
            setOwner(event.target.value);
          }}
        >
          {owners.map((owner) => (
            <option value="owner1">{owner.name}</option>
          ))}
        </select>

        <button className="submitBtn" type="Submit">
          Submit
        </button>
      </form>

      <h1>History</h1>
      <table>
        <thead>
          <tr>
            <th>Owner |</th>
            <th>Pet |</th>
            <th>Breed |</th>
            <th>Color |</th>
            <th>Checked In |</th>
            <th>Actions |</th>
          </tr>
        </thead>

        <tbody>
          {pets?.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.pet}</td>
              <td>{pet.owner_id}</td>
              <td>{pet.breed}</td>
              <td>{pet.color}</td>
              <td>{pet.checked_in ? <p>yes</p> : <p>no</p>}</td>
              <td>
                <button>Delete</button>
                <button>Check-In</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
