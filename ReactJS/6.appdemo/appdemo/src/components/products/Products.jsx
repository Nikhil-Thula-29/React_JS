import './Products.css';
import {Link,Outlet} from 'react-router-dom';

function Products(){
    return (
        <div>
            <h2 style={{color:"green"}}>Products Components</h2>
            <div className='productsContainer'>
                <div className="linksContainer">
                        <Link to="electronics" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>Electronics</Link>
                        <Link to="jewellery" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>Jewellery</Link>
                        <Link to="mensclothing" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>MensClothing</Link>
                        <Link to="womensclothing" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>WomesClothing</Link>
                </div>
                <div className="componentConatainer">
                        <Outlet/>
                </div>
            </div>
        </div>
    );  
}

export default Products;