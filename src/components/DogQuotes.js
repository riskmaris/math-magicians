// import React, { useState, useEffect } from 'react';

// const Quotes = () => {
//   const [quote, setQuote] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=dogs', {
//           headers: {
//             'X-Api-Key': '0oWa33wHCcpfBcURu9UPv39A2rSCT1DcyejUtSf7',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           const randomIndex = Math.floor(Math.random() * data.length);
//           setIsLoading(false);
//           setQuote(data[randomIndex]?.quote);
//         } else {
//           setError('Error fetching quotes');
//           setIsLoading(false);
//         }
//       } catch {
//         setError('Error fetching quotes');
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="quotes">
//       {isLoading && <p className="randomQuotes">Loading...</p>}
//       {!isLoading && error && (
//       <p className="randomQuotes">
//         Error:
//         {error}
//       </p>
//       )}
//       {!isLoading && !error && <p className="randomQuotes">{quote}</p>}
//     </div>
//   );
// };

// export default Quotes;


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
      .catch((err) => {
        setError('An error occurred while fetching quotes.');
        setLoading(false);
      });
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
