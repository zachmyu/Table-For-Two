import React from 'react'
import Venue from '../Venue'

function Search({results}) {
    console.log('][][][]', results)
    return (
        <div>
            <button onClick={() => console.log('results prop', results)}>Click</button>
                {results.length > 1 ? (
                    <div>
                        <button onClick={() => console.log('results', results)}>ifdjifj</button>
                    {
                        results.map((venue) => (
                            <>
                            <button onClick={() => console.log('efffdsfasde', venue)}>venue</button>
                            <Venue venueResult={venue} key={venue.id}></Venue>
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
