import { useState,useEffect } from "react";
import './list.css';
export default function List() {
    const [value,setValue]=useState("");
    const book = [
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ];
    const [books,setBooks]=useState(book);
    const url="https://potential-cod-q7x96pv77f479x-5001.app.github.dev/books";
    async function fetchData(){
            try{
                const response = await fetch(url);
                if(response.ok){
                    const data=await response.json();
                    setBooks(data.books);
                }else throw Error('Failed to fetch data');
            }catch(error){ console.error('Error:',error);}
        }
    useEffect(()=>{
        fetchData();
    },[]);
    const filterList=books.filter(b=>b.title.toLowerCase().includes(value.toLowerCase())|| b.author.toLowerCase().includes(value.toLowerCase()));
    const itemList=filterList.map(b=><li className="bookItem" key={b.id}>
        <div className="bookImage"><img src={b.image_url} width="150"/></div>
        <div className="bookTitle">{b.title}</div>
        <div className="bookAuthor">{b.author}</div>
        <div className="bookPrice">{b.price}$</div>
    </li>);
    return (<>
    <div className="searchbox">
        Search: <input type="text" onChange={e=>setValue(e.target.value)}/>
    </div>
    <ol className="bookList">
        {itemList}
    </ol>
    </>)
}