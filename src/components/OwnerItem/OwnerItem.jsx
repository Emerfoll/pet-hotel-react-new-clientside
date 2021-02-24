import React from 'react';

export default function OwnerItem({ owner, i }) {
  const handleDelete = () => {
    console.log(owner.id);
  };
  return (
    <tr key={i}>
      <td>{owner.name}</td>
      <td>{owner.numberOfPets}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
