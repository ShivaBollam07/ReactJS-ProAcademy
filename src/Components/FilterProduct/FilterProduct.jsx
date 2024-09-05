import './FilterProduct.css';

function onFilterValueChange(event){
    console.log(event.target.value);
}

let FilterProduct = () => {
    return (<div className="filter-area">
        <select name="isAvailable"
            onChange={onFilterValueChange}
        >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>
    );
};

export default FilterProduct;