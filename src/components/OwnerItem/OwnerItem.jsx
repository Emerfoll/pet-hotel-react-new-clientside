import React from 'react';
import { useDispatch } from 'react-redux';

export default function OwnerItem({ owner, i }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_USER', payload: owner });
  };
  return (
    <tr key={i}>
      <td>{owner.name}</td>
      <td>{owner.total_pets}</td>
      <td>
        <button onClick={handleDelete} type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}
