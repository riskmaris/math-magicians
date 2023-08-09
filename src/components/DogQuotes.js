import React, { useState, useEffect } from 'react';

function DogQuotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.api-ninjas.com/v1/quotes?category=dogs', {
      headers: {
        'X-Api-Key': '0oWa33wHCcpfBcURu9UPv39A2rSCT1DcyejUtSf7',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the quote from the response
        setQuote(data[0]?.quote || 'No quotes available.');
        setLoading(false);
      })
      // .catch((err) => {
      //   setError('An error occurred while fetching quotes.');
      //   setLoading(false);
      // });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Random Dog Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}

export default DogQuotes;
