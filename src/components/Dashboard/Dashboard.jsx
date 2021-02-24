


const Dashboard = () => {

    const handleSubmit = () => {
        console.log('submitted pet');
    }

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
                    <tr>Owner</tr>
                </thead>

            </table>


        </div>
    )
}


export default Dashboard;