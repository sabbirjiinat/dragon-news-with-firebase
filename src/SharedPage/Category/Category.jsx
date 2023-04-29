import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryById from '../CategoryById/CategoryById';

const Category = () => {
    const { id } = useParams()
    const categories = useLoaderData()
    
    // console.log(id);
    return (
        <div>
           { id && <h2> This is category {categories.length}</h2>}
            {categories.map(category => <CategoryById
                key={category._id}
                category={category}
            ></CategoryById>)}
        </div>
    );
};

export default Category;