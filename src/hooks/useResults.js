import React, { useState, useEffect} from "react";
import yelp from  "../api/yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
      try{
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "New York City",
        },

      });
      setResults(response.data.businesses);
     } catch (err) {
       setErrorMessage("Something vent vrong");
     }
    };

    return [searchApi,results,errorMessage];

};