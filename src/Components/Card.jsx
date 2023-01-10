import React, { useState } from 'react'; 
import { FaBookReader } from 'react-icons/fa';
import Modal from './Modal';

export default function Card({ book }) {
    console.log(book)
    const[show, setShow]=useState(false);
    const[bookItem,setItem]=useState();
    return (
        <>
            {
                book.map((item) => {
                    let cover=item.cover;
                    let rating = item.rating;
                    let title = item.name;
                    let read = item.url;
                    if(cover!=undefined){
                        return (
                            <>
                            <div className='card' onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={cover} alt="" />
                                <div className="bottom">
                                    <h3 className="title"> {title}</h3>
                                    <p className="amount">rating: {rating}</p>
                                    <a href={read}><FaBookReader /></a>
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }

                })
            }

        </>
    )
}
