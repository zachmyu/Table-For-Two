import React from 'react'
import Venue from '../Venue'
import VenueSearch from '../VenueSearch'

function Search({ results }) {
    console.log('][][][]', results)
    return (
        <div>
            {/* <button onClick={() => console.log('results prop', results)}>Click</button> */}
            {results[0]?.length > 1 ? (
                <div>
                    {/* <button onClick={() => console.log('results', results)}>ifdjifj</button> */}
                    {
                        results.map((venue) => (
                            <>
                                <button onClick={() => console.log('efffdsfasde', venue)}>venue</button>
                                <div style={{ backgroundColor: 'red' }}>
                                    <h4>The results from the search were the following: </h4>
                                    {venue.map(singleVenue => (
                                        <div>
                                            <h1>{singleVenue.name}</h1>
                                            <a href={`/venues/${singleVenue?.id}`}>
                                                <img src={singleVenue?.image_url} alt={singleVenue?.name} />
                                            </a>
                                            <p>{singleVenue?.address}</p>
                                            <p>{singleVenue?.phone_number}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {/* <h5>{venue['0']?.name}</h5>
                                    <a href={`/venues/${venue['0']?.id}`}>
                                        <img src={venue['0']?.image_url} alt={venue['0']?.name} />
                                    </a>
                                    <p>{venue['0']?.address}</p>
                                    <p>{venue['0']?.phone_number}</p>
                                </div>
                                <div>
                                    <h5>{venue['1']?.name}</h5>
                                    <a href={`/venues/${venue['1']?.id}`}>
                                        <img src={venue['1']?.image_url} alt={venue['1']?.name} />
                                    </a>
                                    <p>{venue['1']?.address}</p>
                                    <p>{venue['1']?.phone_number}</p> */}
                                </div>
                                {/* <VenueSearch venueResult={venue} key={venue.id}></VenueSearch> */}
                            </>
                        ))}
                </div>

            ) : (
                <div>
                    <p>The venue you entered does not exist. Please try again</p>
                </div>
            )
            }
        </div>
    )
}

export default Search
