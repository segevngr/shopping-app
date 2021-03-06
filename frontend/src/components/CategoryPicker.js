import React from "react";
import './CategoryPicker.css'

const CategoryPicker = (props) => {

    const renderCategories = (categories) => {
        if(categories) {
            let categoriesJSX = categories.map(function (category) {
                return (<option key={category} value={category}>{category}</option>)
            });
            return (
                <select
                    onChange={event => props.setCategory(event.target.value)}>
                    <option value="All Categories">All Categories</option>
                    {categoriesJSX}
                </select>
            )
        }
    }

    return(renderCategories(props.categories))
}

export default CategoryPicker;