import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>This is our Terms And Condition</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ratione expedita at maxime voluptatibus cum perspiciatis voluptatum doloremque aut minus quam, soluta facilis autem, illum assumenda sit aspernatur commodi nisi.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;