import React from "react";
import Input from "../../shared/components/FormElements/Input";

import './NewPlace.css';

const Users = () => {
    return <form className="place-form">
        <Input type="text" element="input" label="Title" />
    </form>
}

export default Users;