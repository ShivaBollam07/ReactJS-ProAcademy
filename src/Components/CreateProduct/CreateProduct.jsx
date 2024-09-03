import ProductForm from "./ProductForm"

function CreateProduct() {
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto"
                style={{ marginTop: '50px', marginBottom: '50px', backgroundColor: 'white', padding: '10px 10px 20px 20px' }}>
                <ProductForm />
            </div>
        </div>
    )
}

export default CreateProduct
