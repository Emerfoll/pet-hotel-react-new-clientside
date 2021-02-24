import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Dashboard = () => {

    const dispatch = useDispatch();
    const pets = useSelector(store => store.petsReducer);

    console.log(pets);

    const handleSubmit = () => {
        console.log('submitted pet');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_PETS' });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Add Pet</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pet Name" />
                <input type="text" placeholder="Pet Color" />
                <input type="text" placeholder="Pet Breed" />

                <select name="selectOwner" id="selectOwner">
                    <option value="owner1">Owner 1</option>
                    <option value="owner2">Owner 2</option>
                    <option value="owner3">Owner 3</option>
                </select>

                <button
                    className="submitBtn"
                    onClick={handleSubmit}
                >Submit</button>

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
                    <tr><td>chris</td><td>Charlie</td><td>Shih-tzu</td><td>Black</td><td>No</td><td>delete|checkin</td></tr>
                </tbody>


            </table>


        </div>
    )
}


export default Dashboard;