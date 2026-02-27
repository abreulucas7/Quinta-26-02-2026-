import { Text, View, StyleSheet } from "react-native";
import React, { use, useState } from "react";

export default function Index() {
  return (
    <View>
        <CookieClicker></CookieClicker>
    </View>
  );
}



function CookieClicker() {
 const[quantCookies,setQuanCookies] = useState(0)
 let[detalhes, setDetalhes] = React.useState(false);


 function ganharCookie() {
    setQuanCookies( quantCookies + 1)
 }

  
    const ManualFechado = <>
    <h3>Manual</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae porro quibusdam, magni obcaecati iusto ipsa. Earum velit at, sequi consectetur modi vitae nemo obcaecati eaque dolores placeat voluptatem fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum eum consectetur laborum, est similique, tempora, nemo labore impedit aspernatur quae cumque fugit expedita voluptatum deleniti placeat animi non ex.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure porro iste ad ab alias tenetur ut rem magni laborum esse? Accusamus corporis explicabo doloribus ex labore in tempora nostrum rem!
    </p>
    <button onClick={()=> setDetalhes(detalhes=false)}>Fechar Manual</button>
    </>
  
    const ManualAberto = <>
    <button onClick={()=> setDetalhes(detalhes=true)}>Manual</button>
    </>

 return (<>
    <input type="number" value={quantCookies}></input>
    <button onClick={ganharCookie}>Ganhar Cookie</button>
    {detalhes?null:ManualAberto}
    {detalhes?ManualFechado:null}
    </>
 )
}
