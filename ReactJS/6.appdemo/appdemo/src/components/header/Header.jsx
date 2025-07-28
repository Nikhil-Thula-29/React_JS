import "./Header.css"

//Keeping the file name and component name same and exporting it
function Header(){
    let headerStyle={
        color:"white",
    }
    return (
        <div className="header">
            <h2 style={
            headerStyle
        }>Header Component</h2>
        </div>
    );
}
export default Header;