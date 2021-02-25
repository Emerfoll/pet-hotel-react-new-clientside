import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OwnerItem from '../OwnerItem/OwnerItem';

import './ManageOwners.css'

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
        <div className="ownerHeader">
            <h1 >Add Owner</h1>
            <form onSubmit={handleSubmit} className="ownerHeader">
                <input
                    className="input"
                    value={owner}
                    onChange={(event) => setOwner(event.target.value)}
                    type="text"
                    placeholder="Owner Name"
                />
                <button type="submit" className="submitBtn btn btn-success">Submit</button>
            </form>
            <br />
            <h1 className="ownerHeader">Owners</h1>
            <table className="table table-striped table-hover table-dark">
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
