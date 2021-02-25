import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Dashboard.css'

const Dashboard = () => {
    const dispatch = useDispatch();
    const pets = useSelector((store) => store.petsReducer);
    const owners = useSelector((store) => store.ownersReducer);

    // console.log('pets:', pets);
    // console.log('owners:', owners);

    const [pet, setPetName] = useState('');
    const [color, setPetColor] = useState('');
    const [breed, setPetBreed] = useState('');
    const [owner_id, setOwner] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted pet', pet);
        const petTooAdd = {
            pet,
            breed,
            color,
            owner_id,
        };
        console.log(petTooAdd);
        dispatch({ type: 'ADD_PET', payload: petTooAdd });
        setPetName('');
        setPetColor('');
        setPetBreed('');
        setOwner('');
    };


    const deleteClicked = (id) => {
        console.log('delete clicked for:', id);
        dispatch({ type: 'DELETE_PET', payload: id})
    }

    const checkInClicked = (id) => {
        console.log('check-in clicked for:', id);
        dispatch({ type: 'EDIT_PET', payload: {id: id}})
        
    }

    useEffect(() => {
        // dispatch({ type: 'FETCH_PETS' });
        // dispatch({ type: 'FETCH_OWNERS' });
        dispatch({ type: 'FETCH_BOTH' });
    }, []);

    return (
        <div>
            <h1 className="dashHeader">Dashboard</h1>

            <h2>Add Pet</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    placeholder="Pet Name"
                    value={pet}
                    onChange={(event) => setPetName(event.target.value)}
                />
                <input
                    className="input"
                    type="text"
                    placeholder="Pet Color"
                    value={color}
                    onChange={(event) => setPetColor(event.target.value)}
                />
                <input
                    className="input"
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
                >   <option disabled value="" selected>Choose Owner</option>
                    {owners.map((owner) => (
                        <option key={owner.id} value={owner.id}>{owner.name}</option>
                    ))}

                </select>

                <button className="submitBtn btn btn-success" type="Submit">
                    Submit
                </button>
            </form>
            <br />
            <h1>History</h1>

            <table className="table table-striped table-hover table-dark">
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
                            <td>{pet.checked_in ? <p>{pet.checked_in_date}</p> : <p>no</p>}</td>
                            <td>

                                <button
                                    type="button" className="btn btn-danger"
                                    onClick={() => { deleteClicked(pet.id) }}
                                >Delete</button>

                                <button
                                    type="button" className="btn btn-primary"
                                    onClick={() => { checkInClicked(pet.id) }}
                                >Check-In</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
