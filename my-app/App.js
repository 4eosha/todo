import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/header"
import React, {useState} from "react";
import ListItem from './components/list';
import Form from './components/form';


export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: "Сделать это", key: "1"},
    {text: "Сделать то", key: "2"},
    {text: "Отдохнуть", key: "3"},
  ])

  const addHandler = (text, resetText) => {
    if (text.trim()) {
      setListOfItems((list) => {
        return [
          { text: text, key: Math.random().toString(36).substring(7) },
          ...list,
        ];
      });
      resetText();
    }
  };
  
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View style={styles.header}>
      
      <Header />
      <Form addHandler={addHandler}/>
      <FlatList
        data = {listOfItems}
        renderItem = {({ item }) => (
        <ListItem el={item} deleteHandler={deleteHandler}/>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
