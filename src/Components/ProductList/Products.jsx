/* eslint-disable react/prop-types */
import ProductDetails from './ProductDetails';

function Products({ name, description, image, price, isAvailable }) {
  return (
    <li className="list-group-item" 
    style={{backgroundColor : isAvailable ? 'white' : 'lightgray'}}
    >
      <div className="media d-flex p-3 align-items-start">
        <div className="media-body">
          <h5 className="mt-0 font-weight-bold mb-2">{name}</h5>
          <p className="font-italic text-muted mb-0 small">{description}</p>
          <ProductDetails price={price} isAvailable={isAvailable} />
        </div>

        <img
          src={image}
          alt={`${name} image`}
          width="200"
          className="ml-lg-3"
        />
      </div>
    </li>
  );
}

export default Products;
