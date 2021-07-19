import React, { useState }from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
//AIzaSyBUxfH8gj9gvfMEvpu4C0xDtNs3QW7doS8
function Map( ) {
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
                <Marker 
                    lat={59.955413}
                    lng={30.337844}>
                    
                    </Marker>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
