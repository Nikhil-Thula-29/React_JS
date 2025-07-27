//Keeping the file name and component name same and exporting it
function Header(){
    let headerStyle={
        color:"green",
    }
    return (
        <div style={
            headerStyle
        }>
            <h2>Header Component</h2>
        </div>
    );
}
export default Header;