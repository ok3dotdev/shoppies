import React from 'react'

import Result from './Result'

function Results ({ results }) {
	return (
		<section className="results nominations">

            <h3>Search results...</h3>
			{results.map(result => (
				<Result key={result.imdbID} result={result}  />
			))}
		</section>
	)
}

export default Results