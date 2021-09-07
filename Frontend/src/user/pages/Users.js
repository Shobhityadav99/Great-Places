import React from "react";
import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [{
        id: 'a1',
        name: 'Shobhit',
        image: 'shorturl.at/crGOY',
        places: 3
    }];
    return <UsersList items = {USERS} />
}

export default Users;