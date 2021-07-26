import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getVenues, getSingleVenue } from '../../../store/venue'
import { useSelector, useDispatch } from 'react-redux'

function Map({ venue }) {
    const venues = useSelector(state => state.venues.venues)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVenues())
        dispatch(getSingleVenue())
    }, [dispatch])

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    const handleClick = (id) => {
        history.push(`/venues/${id}`)
    }

    return (
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_KEY}`}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>
                {venues?.map(venue => (
                    <Marker
                        key={venue.id}
                        position={
                            {
                                lat: venue.latitude,
                                lng: venue.longitude
                            }
                        }
                        clickable={true}
                        onClick={() => handleClick(venue.id)}
                    >
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
