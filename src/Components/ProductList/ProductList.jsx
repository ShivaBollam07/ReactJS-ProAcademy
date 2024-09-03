/* eslint-disable react/prop-types */
import Products from './Products';
import image1 from '../../assets/fresh-milk.png'
import image2 from '../../assets/cottage-cheese.png'
import image3 from '../../assets/brocoli.png'
import image4 from '../../assets/oranges.png'
import image5 from '../../assets/olive-oil.png'
import { useState } from 'react';

let products = [
    {
      pID: 1,
      pName: 'Fresh Milk',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: image1,
      price: 12
    },
    {
      pID: 2,
      pName: 'Cottage Cheese',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: image2,
      price: 10
    },
    {
      pID: 3,
      pName: 'Brocoli',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: image3,
      price: 15
    },
    {
      pID: 4,
      pName: 'oranges',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: image4,
      price: 20
    },
    {
      pID: 5,
      pName: 'Olive oil',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: image5,
      price: 14
    }
  ]
function ProductList(props) {
    let [newProductList, updateProductList] = useState(products)
    updateProductList([props.newProduct, ...newProductList])
    return (
        <div className='row'>
            <div className='col-lg-8 mx-auto'>
                <ul className="list-group shadow">
                    {
                      newProductList.map((product) => {
                         return <Products 
                            key={product?.pID}
                            pName={product.pName}
                            desc={product.desc}
                            isAvailable={product.isAvailable}
                            image={product.image}
                            price={product.price}
                          />
                      })
                    }
                </ul>

            </div>
        </div>
    )
}

export default ProductList;