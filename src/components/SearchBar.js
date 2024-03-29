import React from "react";
import { Text,StyleSheet,View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TextInput } from "react-native-web";

const SearchBar = ({ term, onTermSubmit, onTermChange}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
             autoCapitalize="none"
             autoCorrect={false}
             style={styles.inputStyle}
             placeholder="Search"
             value={term}
            //  onChangeText={(newTerm) => onTermChange(newTerm)}
            //  onEndEditing={() => console.log("Submitted")}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "gray",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
});

export default SearchBar;