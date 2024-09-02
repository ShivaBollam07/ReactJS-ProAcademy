import React, { useState } from 'react'

function ProductForm() {
    // let [productName, setProductName] = useState('');
    // let [productPrice, setProductPrice] = useState('');
    // let [productDescription, setProductDescription] = useState('');
    // let [productAvailability, setProductAvailability] = useState('');
    // let [productImageURL, setProductImageURL] = useState('');
    let [userInput, setUserInput] = useState({
        productName: '',
        productPrice: '',
        productDescription: '',
        productAvailability: '',
        productImageURL: ''
    })


    function nameInputHandler(event) {
        setUserInput({
            ...userInput,
            productName: event.target.value
        })
    }

    function ProductPriceHandler(event) {
        setUserInput({
            ...userInput,
            productPrice: event.target.value
        })
    }

    function ProductdescriptionHandler(event) {
        setUserInput({
            ...userInput,
            productDescription: event.target.value
        })
    }

    function ProductAvailabilityHandler(event) {
        setUserInput({
            ...userInput,
            productAvailability: event.target.value
        })
    }

    function FileInputHandler(event) {
        setUserInput({
            ...userInput,
            productImageURL: event.target.value
        })
    }





    return (
        <div className="row g-3">
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    onChange={nameInputHandler}
                />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    onChange={ProductPriceHandler}

                    placeholder="Product Price" />
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    onChange={ProductdescriptionHandler}

                    placeholder="Product Description" />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                    onChange={ProductAvailabilityHandler}

                    role="switch" id="isAvailable" />
                <label className="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                    onChange={FileInputHandler}

                />
            </div>


            <button type="submit" className="btn btn-primary">Add Product</button>
        </div>
    )
}

export default ProductForm;