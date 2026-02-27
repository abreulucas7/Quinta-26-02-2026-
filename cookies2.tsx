import { Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";

export default function Index() {
  return (
    <View>
      <CookieClicker></CookieClicker>
    </View >
  );
}


function CookieClicker() { 
  const [quantidade, setQuantidade] = React.useState(10);
  let [detalhes, setDetalhes] = React.useState(false);
  

  let botoesExtra1 = <>
  <button onClick={()=> setQuantidade(quantidade-1)}>-</button></>
  
  let botoesExtra2 = <>  
  <button onClick={()=> setQuantidade(0)}>0</button></>

  let botoesExtra3 = <>  
  <button onClick={()=> setQuantidade(quantidade * 10)}>x 10</button></>

  let botoesExtra4 = <>  
  <button onClick={()=> setQuantidade(quantidade / 10)}>/ 10</button></>
  
  let botoesExtra5 = <>  
  <button onClick={()=> setQuantidade(quantidade - 10)}>- 10</button></>



 function ganharCookie() {
   setQuantidade(quantidade + 1);
   console.log(quantidade)
 }
 function add10() {
  setQuantidade(quantidade + 10);
  console.log(quantidade)
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
 return (
  <>
  <h1>Cookie Clicker</h1>
  <p>Quantidade de cookies: {quantidade}</p>
  <button onClick={ganharCookie}>+</button>
  {quantidade?botoesExtra1:null}
  <button onClick={add10}>+ 10</button>
  {quantidade?botoesExtra5:null}
  {quantidade?botoesExtra3:null}
  {quantidade?botoesExtra4:null}
  {quantidade?botoesExtra2:null}
  {detalhes?null:ManualAberto}
  {detalhes?ManualFechado:null}
  </>
  );
}
