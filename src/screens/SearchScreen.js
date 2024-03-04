import React, { useState,useEffect } from "react";
import {Text,StyleSheet,View} from "react-native";
import SearchBar from "../components/SearchBar";
import { Feather } from '@expo/vector-icons';
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultLists from "../components/ResultLists";

const SearchScreen = (searchTerm) =>{
    const [term,setTerm] = useState("");
    const [searchApi,results , errorMessage]= useResults();
 
    const onTermSubmit = () => {
      searchApi(term);
      console.log("Submitted");
      
    };

    const filterResultsByPrice = (price) =>{
      return results.filter((result) => {
        return result.price === price;
      });
    };

    return(
    <View>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={onTermSubmit}
          />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Ve have found {results.length} results</Text>
        <Text>{term}</Text>
        <ResultLists results={filterResultsByPrice("$")} title="Cost Effective"></ResultLists>
        <ResultLists results={filterResultsByPrice("$$")} title="Bit Proicier"></ResultLists>
        <ResultLists results={filterResultsByPrice("$$$")} title="Big Spender"></ResultLists>
    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;