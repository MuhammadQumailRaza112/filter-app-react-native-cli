import React, { useEffect } from 'react';
import { StyleSheet, TextInput,Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../store/actions/UserAction";
// import ListComponent from "./ListComponent";
// import { Feather } from "@expo/vector-icons";    

export default function InputComponent() {
    const dispatch = useDispatch();
    
    const fetchData = (text) => {
        dispatch(get_users(text))
    }



    return (
        <View style={{width:'100%', flexDirection:'row',alignItems:'center', backgroundColor:'#C8C6CC', marginTop:10, borderRadius: 20,  padding: 8}}>
            {/* <Feather name="search" size={24} color="#99989E" /> */}
            <TextInput onChangeText={(text)=> fetchData(text)} placeholderTextColor="#99989E" style={styles.input} placeholder="Search user" />
            </View>
    );
}

const styles = StyleSheet.create({
    input: {
     paddingLeft:10,color:'black',
     width:'100%'
    },
});