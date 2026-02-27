import { Text, View, StyleSheet } from "react-native";
import React, { use, useState } from "react";

export default function Index() {
  return (
    <View style={{flex:1, flexDirection:'column', backgroundColor:'black'}}>
     <View style={{height:'1%',padding:1}}></View>
     <ComponenteDivididoEmQuatro></ComponenteDivididoEmQuatro>
    </View>
  );
}


function ComponenteDivididoEmQuatro() {
  function Painel() {
    return (
      <View style={{
        width:'50%',
        height:'25%',
        borderColor: 'black', borderWidth:2,
        backgroundColor: 'steelblue'
      }}></View>
    )
  }
  return(
    <>
    <View style={{flex:1, flexWrap:'wrap',flexDirection:'row', backgroundColor:'blue'}}>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
    </View>
    </>

  )
}


const styles = StyleSheet.create({
  container:{
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30, 
  },
  red: {
    color: 'red' 
  },
  
});
function ComponenteComEstiles() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Vermelho</Text>
      <Text style={styles.bigBlue}>Azulão</Text>
      <Text style={[styles.bigBlue, styles.red]}>Azulão depois Vermelho</Text>
      <Text style={[styles.red, styles.bigBlue]}>Vermelho depois Azulão</Text>
    </View>
  )
}
