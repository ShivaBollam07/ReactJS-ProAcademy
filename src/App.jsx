import './App.css'
import ProductList from './Components/ProductList/ProductList'
import CreateProduct from './Components/CreateProduct/CreateProduct'
import {useState} from 'react'

function App() {

  let [newProduct, setNewProduct] = useState(null);

  function createProduct(product){
    setNewProduct(product)
  }

  return (
    <div>
      <CreateProduct 
        CreateProduct={createProduct}
      />
      <ProductList newProduct={newProduct} />
    </div>
  )
}

export default App
