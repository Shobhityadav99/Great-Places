import React from "react";
import { useParams } from "react-router-dom";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

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

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    };
    return (
        <form>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={()=>{}}
                value = {identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={()=>{}}
                value = {identifiedPlace.description}
                valid={true}
            />
            <Input
                id="address"
                element="textarea"
                label="Address"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Please enter a valid address."
                onInput={()=>{}}
                value = {identifiedPlace.address}
                valid={true}
            />
            <Button type="submit" disabled={true}>UPDATE PLACE</Button>
        </form>
    );

};

export default UpdatePlace;