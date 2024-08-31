import React, { useState } from 'react';

function Products(props) {
  // Manage product count state within the component
  const [productCount, setProductCount] = useState(0);

  // Update the badge class dynamically based on availability
  let bgClass = 'badge-margin-left-240 badge'
  if (props.isAvailable) {
    bgClass += ' bg-success';
  }
  else {
    bgClass += ' bg-danger';
  }

  const style = {
    padding: '0px 20px',
    fontSize: 20,
  };

  // Format the product count for display
  function displayFormatedProductCount() {
    return productCount > 0 ? productCount : <p>zero</p>;
  }

  return (
    <ul className="list-group shadow">
      <li className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
            <p className="font-italic text-muted mb-0 small">{props.desc}</p>
            <div className="d-flex align-items-center justify-content-start mt-1">
              <h6 className="font-weight-bold my-2">${props.price}</h6>
              <span className="text-muted font-weight-normal font-italic">
              </span>
              <button
                className="btn btn-primary"
                onClick={() => setProductCount((count) => Math.max(count - 1, 0))}
              >
                -
              </button>
              <span style={style}>{displayFormatedProductCount()}</span>
              <button
                className="btn btn-primary"
                onClick={() => setProductCount((count) => count + 1)}
              >
                +
              </button>
              <span className={bgClass}>{props.isAvailable ? 'Available' : 'UAvailable'}</span>
            </div>
          </div>
          <img
            src={props.image}
            alt={`${props.name} image`}
            width="200"
            className="ml-lg-5 order-1 order-lg-2"
          />
        </div>
      </li>
    </ul>
  );
}

export default Products;
