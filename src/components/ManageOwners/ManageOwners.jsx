import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OwnerItem from '../OwnerItem/OwnerItem';

const ManageOwners = () => {
  const dispatch = useDispatch();
  const owners = useSelector((state) => state.ownersReducer);

  const [owner, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_OWNER', payload: { name: owner } });
    setOwner('');
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_OWNERS' });
  }, []);

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
