/* eslint-disable react/prop-types */
import ProductForm from "./ProductForm"

function CreateProduct(props) {

    function onCreateProduct(product) {
        props.CreateProduct(product)
    }

    return (
        <div
            style={{ marginTop: '50px', backgroundColor: 'white', padding: '10px 10px 20px 20px', borderRadius: 2 }}>
            <ProductForm CreateProduct={onCreateProduct} />
        </div>
    )
}

export default CreateProduct