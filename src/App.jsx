import './App.css'
import Products from './Components/Product'
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
  return (
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
      <ul className="list-group shadow">

        <Products
          id = {products[0].pID}
          name = {products[0].pName}
          desc = {products[0].desc}
          isAvailable = {products[0].isAvailable}
          image = {products[0].image}
          price = {products[0].price}
         ></Products>
        <Products
          id = {products[1].pID}
          name = {products[1].pName}
          desc = {products[1].desc}
          isAvailable = {products[1].isAvailable}
          image = {products[1].image}
          price = {products[1].price}
          ></Products>
        <Products
          id = {products[2].pID}
          name = {products[2].pName}
          desc = {products[2].desc}
          isAvailable = {products[2].isAvailable}
          image = {products[2].image}
          price = {products[2].price}
          ></Products>
        <Products
          id = {products[3].pID}
          name = {products[3].pName}
          desc = {products[3].desc}
          isAvailable = {products[3].isAvailable}
          image = {products[3].image}
          price = {products[3].price}
          ></Products>
        <Products
          id = {products[4].pID}
          name = {products[4].pName}
          desc = {products[4].desc}
          isAvailable = {products[4].isAvailable}
          image = {products[4].image}
          price = {products[4].price}
          ></
        Products>
      </ul>
       
      </div>
    </div>
  )
}

export default App
