import { useState } from 'react';

function ProductForm(props) {
    let [pName, setpName] = useState('');
    let [price, setprice] = useState('');
    let [desc, setdesc] = useState('');
    let [isAvailable, setisAvailable] = useState(false);
    let [image, setimage] = useState(null); // store file object

    // Event handlers for form inputs
    function nameInputHandler(event) {
        setpName(event.target.value);
    }

    function priceHandler(event) {
        setprice(event.target.value);
    }

    function descHandler(event) {
        setdesc(event.target.value);
    }

    function isAvailableHandler(event) {
        setisAvailable(event.target.checked);
    }

    function FileInputHandler(event) {
        setimage(event.target.files[0]); // store the file object
    }

    // Form submission handler
    function createProductHandler(event) {
        event.preventDefault();
        let product = {
            pName: pName,
            price: price,
            desc: desc,
            isAvailable: isAvailable,
            image: image
        };

        // Clear the form after submission
        setpName('');
        setprice('');
        setdesc('');
        setisAvailable(false);
        setimage(null);

        // Call the parent's function to handle the new product
        props.onCreateProduct(product);
    }

    return (
        <form className="row g-3" onSubmit={createProductHandler}>
            {/* Form fields for product details */}
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    value={pName}
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
                    value={price}
                    onChange={priceHandler}
                    placeholder="Product Price" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    value={desc}
                    onChange={descHandler}
                    placeholder="Product Description" />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                    checked={isAvailable}
                    onChange={isAvailableHandler}
                    role="switch" id="isAvailable" />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                    onChange={FileInputHandler}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
}

export default ProductForm;
