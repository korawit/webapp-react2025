import { useRef,useState } from "react";
function BmiText({bmi}){
    if(bmi<18.5) return (<><h1>Underweight</h1>
    <img src="underweight_cat.png" width={200}/></>);
    if(bmi>30) return (<><h1>Overweight</h1>
    <img src="overweight_cat.png" width={200}/></>);
    return (<><h1>Normal</h1>
    <img src="normal_cat.png" width={200}/></>);
}
export default function Bmi(){
    const W_InputRef= useRef(null);
    const H_InputRef=useRef(null);
    const [bmi,setBmi]=useState(0.0);
    function CalculateBmi(){
        let w= parseFloat(W_InputRef.current.value);
        let h= parseFloat(H_InputRef.current.value)/100;
        setBmi(w/(h*h));}
    return (<>
    Weight:<input ref={W_InputRef}/> kg.<br/>
    Height:<input ref={H_InputRef}/> cm.<br/>
    <button onClick={CalculateBmi}>Calculate</button><br/>
    Bmi: {bmi.toFixed(2)} <br/>
    <BmiText bmi={bmi}/>
    </>);
}