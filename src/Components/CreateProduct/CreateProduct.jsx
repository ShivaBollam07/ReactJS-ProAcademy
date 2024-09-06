/* eslint-disable react/prop-types */
import ProductForm from "./ProductForm"
import { useState } from "react"

function CreateProduct(props) {
    let [showForm, setShowForm] = useState(false)

    function onCreateProduct(product) {
        props.CreateProduct(product)
    }

    function setShowFormStatus() {
        if (showForm) {
            setShowForm(false)
        }
        else {
            setShowForm(true)
        }
    }

    return (
        <div
            style={{ marginTop: '50px', backgroundColor: 'white', padding: '10px 10px 20px 20px', borderRadius: 2 }}>

            {
                showForm ?
                    <button
                        onClick={setShowFormStatus}
                        className="btn btn-danger"
                    >Cancel</button> :
                    <button
                        onClick={setShowFormStatus}
                        className="btn btn-primary"
                    >Create Product</button>
            }
                
                {
                    showForm && <ProductForm
                        onCreateProduct={onCreateProduct}
                    />
                }

        </div>
    )
}

export default CreateProduct