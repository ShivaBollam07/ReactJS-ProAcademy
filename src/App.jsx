import './App.css'
import ProductList from './Components/ProductList/ProductList'
import CreateProduct from './Components/CreateProduct/CreateProduct'
import { useState } from 'react'
import image1 from './assets/fresh-milk.png'
import image2 from './assets/cottage-cheese.png'
import image3 from './assets/brocoli.png'
import image4 from './assets/oranges.png'
import image5 from './assets/olive-oil.png'

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

function App() {

  let [newProductList, setNewProductList] = useState(products)


  function createProduct(product) {
    setNewProductList([product, ...newProductList])
  }

  return (
    <div>
      <CreateProduct
        CreateProduct={createProduct}
      />
      <ProductList
        newProductList={newProductList}
       />
    </div>
  )
}

export default App