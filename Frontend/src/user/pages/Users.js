import React from "react";
import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [{
        id: 'a1',
        name: 'Shobhit',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BXuuPs6Tn1LvK_W1ZsGgVjsv-1Y6FqSkUw&usqp=CAU',
        places: 1
    }];
    return <UsersList items = {USERS} />
}

export default Users;