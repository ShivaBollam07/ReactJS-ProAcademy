/* eslint-disable react/prop-types */
import Button from './Button';
import { useState } from 'react';

function ProductDetails({ price, isAvailable }) {

    let [ProductCount, setProductCount] = useState(0);
    const bgClass = isAvailable
        ? 'badge-margin-left-240 badge bg-success'
        : 'badge-margin-left-240 badge bg-danger';

    const style = {
        padding: '9px 14px',
        fontSize: 13,
    };

    const displayFormattedProductCount = () => {
        return ProductCount === 0 ? 'Zero' : ProductCount;
    };

    //   const buttonHoverHandler = () => {
    //     console.log('Button hovered');
    //   };

    let decrementProductCount = function () {
        setProductCount(--ProductCount);
    }

    let incrementProductCount = function () {
        setProductCount(++ProductCount);
    }


    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ marginRight: '30px' }}>${price}</h6>
            <Button eventHandler={decrementProductCount}> - </Button>
            <span style={style}>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementProductCount}> + </Button>
            <span className={bgClass}>{isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    );
}

export default ProductDetails;
