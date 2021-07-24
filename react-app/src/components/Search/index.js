import React from 'react'


function Search({ results }) {
	return (
		<div>
			{results[0]?.length > 1 ? (
				<>
					{results.map((venue) => (
						<>
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
						</>
					))}
				</>
			) : (
				<div>
					<p>The venue you entered does not exist. Please try again</p>
				</div>
			)}
		</div>
	)
}

export default Search
