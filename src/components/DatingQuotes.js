import React, { useState, useEffect } from 'react';

function DatingQuotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch('https://api.api-ninjas.com/v1/quotes?category=dating', {
      method: 'GET',
      headers: {
        'x-api-key': 'uun4kZMSyOheUFz1VsMXDA==t2AoG7fFgC4LDZXc',
      },
    })

      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]?.quote || "Dating is every man's dream.");
        setLoading(false);
      })
      .catch(() => {
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
      <h2>Random Date Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}

export default DatingQuotes;
