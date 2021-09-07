import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 1,
        title: 'Taj Mahal',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9atdRLLhdsjyM3K5AMfUCG1ieKMoeBVY7FA&usqp=CAU',
        description: 'White',
        address: 'Agra',
        location: {
            lat: 27.173891,
            lng: 78.042068
        },
        creator: 'a1',
    },
    {
        id: 2,
        title: 'Taj Mahal ki compy',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlW11l3olPUun9TUlfnuaaJ2LZRKqhrFtVQ&usqp=CAU',
        description: 'Yemloo',
        address: 'Agra ki compy',
        location: {
            lat: 27.173891,
            lng: 78.042068
        },
        creator: 'a2',
    }
];
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => userId === place.creator);
    return <PlaceList items ={loadedPlaces}/>
};

export default UserPlaces;