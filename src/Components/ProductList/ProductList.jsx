/* eslint-disable react/prop-types */
import Products from './Products';
import image1 from '../../assets/fresh-milk.png'
import image2 from '../../assets/cottage-cheese.png'
import image3 from '../../assets/brocoli.png'
import image4 from '../../assets/oranges.png'
import image5 from '../../assets/olive-oil.png'
import { useState } from 'react';



function ProductList(props) {
  console.log(props);
  return (
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
        <ul className="list-group shadow">
          {
            props.newProductList.map((product) => {
              return <Products
                key={product?.pID}
                id={product?.pID}
                name={product.pName}
                description={product.desc}
                isAvailable={product.isAvailable}
                image={product.image}
                price={product.price}
              />
            })
          }
        </ul>
      </div>
    </div>
  );
}


export default ProductList;