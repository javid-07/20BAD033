import React from 'react';
import {useParams} from 'react-router-dom';
import traininfo from '../jsonfile/train.JSON';

const singletrain = () => {
    const {trainNumber} = useParams();
    const train = traininfo.find(train => train.trainNumber === trainNumber);

    if(!train)
    {
        return <div>train not found.</div>;
    }

    return(
        <div>
            <h1>{train.trainName}</h1>
            <p>departure Time : {train.departureTime}</p>
            <p>Sleeper availability: {train.seatsAvailable.sleeper}</p>
            <p>Sleeper price: {train.price.sleeper}</p>
            <p>AC availability: {train.seatsAvailable.AC}</p>
            <p>AC price: {train.proce.sleeper.AC}</p>
        </div>
    );
};

export default singletrain;