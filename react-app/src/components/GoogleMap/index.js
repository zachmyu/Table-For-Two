import React, { useState }from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getVenues } from '../../store/venue'
import { useSelector, useDispatch } from 'react-redux'
//AIzaSyBUxfH8gj9gvfMEvpu4C0xDtNs3QW7doS8
function Map( {venues} ) {

    // const venues = useSelector(state => state.venues)
    // const venue = Object.values(venues)
    
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };
    return (
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_KEY}`}>
            <GoogleMap 
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>
                {venues?.map(venue => {
                    
                    <Marker key='marker'
                        key={venue.id}
                        position={
                            {
                                lat: venue.latitude,
                                lng: venue.longitude
                            }
                        }
                        
    
                        >
                        
                        </Marker>
                })}
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
