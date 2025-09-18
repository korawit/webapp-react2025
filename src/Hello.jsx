import { useLocation, useParams } from "react-router-dom";
export default function Hello(props){
    const {n,m} = useParams();
    const urlstring = new URLSearchParams(useLocation().search);
    const name=urlstring.get("name");
    const surname=urlstring.get("surname");
    return (<>
    <h1>Hello {n} {m} {name} {surname}</h1>
    </>);
}