/* eslint-disable react/prop-types */
import ProductForm from "./ProductForm"

function CreateProduct(props) {

    function onCreateProduct(product) {
        props.CreateProduct(product)
    }

    return (
        <div className="row">
            <div className="col-lg-8 mx-auto"
                style={{ marginTop: '50px', marginBottom: '50px', backgroundColor: 'white', padding: '10px 10px 20px 20px' }}>
                <ProductForm
                    CreateProduct={onCreateProduct}
                />
            </div>
        </div>
    )
}

export default CreateProduct
