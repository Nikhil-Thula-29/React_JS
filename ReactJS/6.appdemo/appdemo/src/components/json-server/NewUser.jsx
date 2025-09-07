import "./NewUser.css";

function NewUser(){
    return (
        <div className="new-user">
            <h2>New Users</h2>
            <input/>
            <br></br>
            <br></br>
            <select>
                <option>Select City</option>
                <option>City1</option>
                <option>City2</option>
                <option>City3</option>
                <option>City4</option>
                <option>City5</option>
            </select>
            <br></br>
            <br></br>
            <button>New User</button>
        </div>
    );
}
export default NewUser;