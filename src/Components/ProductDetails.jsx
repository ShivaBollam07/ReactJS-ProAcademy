import React, { useState } from 'react';
import Button from './Button';

function ProductDetails({ price, isAvailable }) {
  const [productCount, setProductCount] = useState(0);

  const bgClass = isAvailable
    ? 'badge-margin-left-240 badge bg-success'
    : 'badge-margin-left-240 badge bg-danger';

  const style = {
    padding: '9px 14px',
    fontSize: 13,
  };

  const displayFormattedProductCount = () => {
    return productCount === 0 ? 'Zero' : productCount;
  };

//   const buttonHoverHandler = () => {
//     console.log('Button hovered');
//   };

  return (
    <div
    //   onMouseEnter={buttonHoverHandler}
      className="d-flex align-items-center justify-content-start mt-1"
    >
      <h6 className="font-weight-bold my-2" style={{ marginRight: '30px' }}>
        ${price}
      </h6>
      <Button onClick={() => setProductCount(count => Math.max(count - 1, 0))}>
        {' '}
        -{' '}
      </Button>
      <span style={style}>{displayFormattedProductCount()}</span>
      <Button onClick={() => setProductCount(count => count + 1)}> + </Button>
      <span className={bgClass}>{isAvailable ? 'Available' : 'Unavailable'}</span>
    </div>
  );
}

export default ProductDetails;
