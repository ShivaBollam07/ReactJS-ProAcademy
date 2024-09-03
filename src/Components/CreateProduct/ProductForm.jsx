import { useState } from 'react'

function ProductForm() {
    let [productName, setProductName] = useState('');
    let [productPrice, setProductPrice] = useState('');
    let [productDescription, setProductDescription] = useState('');
    let [productAvailability, setProductAvailability] = useState(false);
    let [productImageURL, setProductImageURL] = useState('');
    // let [userInput, setUserInput] = useState({
    //     productName: '',
    //     productPrice: '',
    //     productDescription: '',
    //     productAvailability: '',
    //     productImageURL: ''
    // })

    function nameInputHandler(event) {
        //     setUserInput({
        //         ...userInput,
        //         productName: event.target.value
        //     })
        //    return((prevState) => {
        //         return {
        //             ...prevState,
        //             productName: event.target.value
        //         }
        //    })
        setProductName(event.target.value)
    }

    function ProductPriceHandler(event) {
        // setUserInput({
        //     ...userInput,
        //     productPrice: event.target.value
        // })  
        setProductPrice(event.target.value)
    }

    function ProductdescriptionHandler(event) {
        // setUserInput({
        //     ...userInput,
        //     productDescription: event.target.value
        // })
        setProductDescription(event.target.value)

    }

    function ProductAvailabilityHandler(event) {
        // setUserInput({
        //     ...userInput,
        //     productAvailability: event.target.value
        // })
        setProductAvailability(event.target.checked)
    }

    function FileInputHandler(event) {
        // setUserInput({
        //     ...userInput,
        //     productImageURL: event.target.value
        // })
        setProductImageURL(event.target.value)
    }

    function createProductHandler(event) {
        event.preventDefault();
        let product = {
            productName: productName,
            productPrice: productPrice,
            productDescription: productDescription,
            productAvailability: Boolean(productAvailability),
            productImageURL: productImageURL
        }

        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductAvailability(false);
        setProductImageURL('');

        console.log(product);
    }


    return (
        <form className="row g-3" onSubmit={createProductHandler}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    value={productName}
                    placeholder="Product Name"
                    onChange={nameInputHandler}
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    value={productPrice}
                    onChange={ProductPriceHandler}
                    placeholder="Product Price" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    value={productDescription}
                    onChange={ProductdescriptionHandler}

                    placeholder="Product Description" />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                    value={productAvailability}
                    onChange={ProductAvailabilityHandler}
                    role="switch" id="isAvailable" />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                    onChange={FileInputHandler}
                    value={productImageURL} />
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}

export default ProductForm;