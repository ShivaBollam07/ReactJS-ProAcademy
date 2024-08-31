
// import  { useState } from 'react';

// function ProductDetails(props) {
//     const [productCount, setProductCount] = useState(0);
//   let bgClass = 'badge-margin-left-240 badge'
//   if (props.isAvailable) {
//     bgClass += ' bg-success';
//   }
//   else {
//     bgClass += ' bg-danger';
//   }

//   const style = {
//     padding: '0px 20px',
//     fontSize: 20,
//   };


//   return (
//     <div className="d-flex align-items-center justify-content-start mt-1">
//               <h6 className="font-weight-bold my-2">${props.price}</h6>
//               <span className="text-muted font-weight-normal font-italic">
//               </span>
//               <button
//                 className="btn btn-primary mx-3"
//                 onClick={() => setProductCount((count) => Math.max(count - 1, 0))} > - </button>
//               <span style={style}>{displayFormatedProductCount()}</span>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => setProductCount((count) => count + 1)}> + </button>
//               <span className={bgClass}>{props.isAvailable ? 'Available' : 'UAvailable'}</span>
//               <ProductDetails />
//             </div>
//   )
// }

// export default ProductDetails


function ProductDetails(props) {
    let productCount = 0;
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
    const displayFormatedProductCount = () => {
        if (productCount === 0) {
            return 'Zero';
        }
        return product
    }



    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2"
                style={{ 'margin-right': '30px' }}
            >${props.price}</h6>
            <button className="btn btn-primary mx-3"
            > - </button>
            <span style={{ padding: '9px 14px', 'fontSize': 13 }}>{displayFormatedProductCount()}</span>
            <button className="btn btn-primary"> + </button>
            <span className={bgClass}>{props.isAvailable ? 'Available' : 'UAvailable'}</span>
        </div>
    )
}

export default ProductDetails;
