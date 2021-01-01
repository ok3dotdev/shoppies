import React from 'react'

import Result from './Result'

function Results({ results }) {
	return (
		<section className="results nominations">

			<h3>Search results...</h3>
			{(!results || results.length < 1) ? <h1>Please search for Movies</h1> : results.map(result => (
				<Result key={result.imdbID} result={result} />
			))}

		</section>
	)
}

export default Results