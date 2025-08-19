
import { Link } from 'react-router-dom';
import './Cards.css'
function CardsWithRedux({image,title,price,rating,id}){
    return (
        <div className="card">
                <img src={image} width="100%" height={200}/>
                <p>{id}</p>
                <h3>{title}</h3>
                <p>{price}</p>
                <p>{rating}</p>
                <Link to={`/proddetails/${id}/${price}`}>
                <button>Product Details</button>
                </Link>
                    
        </div>
    );
}
export default CardsWithRedux;