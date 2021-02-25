import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'


function Nav() {



    return (
        <div className="nav">

            <Link className="dash" to="/home">
                Dashboard
            </Link>


            <Link className="owner" to="/owners">
                Owners
          </Link>

        </div>
    );
}

export default Nav;
