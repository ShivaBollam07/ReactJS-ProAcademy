import './FilterProduct.css';

let FilterProduct = (props) => {
    function onFilterValueChange(event) {
        // eslint-disable-next-line react/prop-types
        props.filterValueSelected(event.target.value);
    }

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