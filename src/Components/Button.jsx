// function buttonClickHandler(){
//     console.log('Button clicked')
// }

function Button(operation) {
    return (
        <button
        // onClick={buttonClickHandler}
        onClick={operation.eventHandler}
        className="btn btn-primary mx-4"
        >{operation.children}</button>
    )
}

export default Button