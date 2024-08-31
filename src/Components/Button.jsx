function Button(operation) {
    return (
        <button
            className="btn btn-primary mx-4"
        >{operation.children}</button>
    )
}

export default Button