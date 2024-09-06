/* eslint-disable react/prop-types */
import Products from './Products';


function ProductList(props) {
  if(props.newProductList.length === 0) {
    return <h1>No Products Available</h1>
  } 
  else {
  return (

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

  );
}
}


export default ProductList;