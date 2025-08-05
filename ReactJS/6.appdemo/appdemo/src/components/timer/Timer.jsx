function Timer(){
    return (
        <div style={{
            width:"500px",
            margin:"100px auto",
            textAlign:"center",
            boxShadow:"0 0 10px blue"
            }}>
        <h2>Timer value is: {0}</h2>
        <br></br>
        <button>Start</button>
        <button>Stop</button>
        <button>Clear</button>
        </div>
    );
}
export default Timer;