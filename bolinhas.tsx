import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {

  return (
    <View style={{flex:1, flexDirection:'column', backgroundColor:'black'}}>
      <View style={{height:'25%',padding:10}}>

      </View>    
      
    </View>
  );
}

function ComponenteDivididoEmQuatro() {
  function Painel() {
    return (
      <View style={{
        width:'50%', height:'50%',
        borderColor:'black', borderWidth:1,
        backgroundColor:'orange'
      }}></View>
    );
  }

  return (
    <>
    <View style={{flex:1, flexWrap:'wrap', flexDirection:'row', backgroundColor:'blue'}}>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
      <Painel></Painel>
    </View>
    </>
  );

}

function CaixaDeBolinhas({quantidade}) {
  function Bolinha() {
    return (
      <View style={
        { 
          width:50, height:50,
          borderRadius:'50%',
          backgroundColor:'magenta',
        }
      }>
      </View>
    );
  }

  const bolinha = <Bolinha></Bolinha>
  const bolinhas = []

  for (let i=0; i<quantidade; i++) {
    
    bolinhas.push(bolinha)
  }

  return (
    
    <View style={{flex:1,flexDirection:'row',flexWrap:"wrap"}}>
      {bolinhas}
    </View>

  );

  
}


const styles = StyleSheet.create(
  {
  titulo1: {
        color: 'blue',
        fontSize: 30,
        backgroundColor: 'yellow',
        padding: 10,
      },
    container: {
      marginTop: 50,
      fontStyle: 'italic',
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  }
);

