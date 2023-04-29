import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
        .then(data =>setCategory(data))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            {categories.map(category => 
                <p key={category.id}>
                    <Link to={`/category/${category.id}`} className=''> { category.name}</Link>


                </p>
            )}
        </div>
    );
};

export default LeftNavigation;