import { useState } from 'react';
import { useDispatch } from 'react-redux';
import OwnerItem from '../OwnerItem/OwnerItem';

const ManageOwners = () => {
  const dispatch = useDispatch();

  const [owners, setOwners] = useState([
    { id: 1, name: 'Tony', numberOfPets: 4 },
    { id: 2, name: 'Brock', numberOfPets: 12 },
  ]);

  const [owner, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_OWNER', payload: { name: owner } });
    setOwner('');
  };
  return (
    <div>
      <h1>Add Owner</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
          type="text"
          placeholder="Owner Name"
        />
        <button type="submit">Submit</button>
      </form>

      <h1>Owners</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Pets</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner, i) => (
            <OwnerItem owner={owner} i={i} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOwners;
