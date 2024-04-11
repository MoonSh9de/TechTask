import React from "react";
import { Link } from 'react-router-dom';

import"./Logo.css"

const Logo = () => (
    <Link to="/general" className="logo" id="logo">
        <h1 className="logo__title">Qpick</h1>
    </Link>
);

export default Logo;

