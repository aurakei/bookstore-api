import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Modal({show, item, onClose}) {
    if(!show){
        return null;
    }
    let cover=item.cover;
  return (
    <>
    <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}>
                <FaTimes />
            </button>
            <div className="inner-box">
                <img src={cover} alt="" />
                <div className="info">
                    <h1>{item.title}</h1><br />
                    <h3>{item.authors}</h3><br />
                    <h4>{item.created_editions} editions created<span>{item.year}</span></h4><br />
                    <a href={item.url}><button>More</button></a>
                </div>
            </div>
            <h4 className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit officiis mollitia, expedita voluptatem sit, alias laborum, reiciendis voluptate inventore voluptatum adipisci labore odit ratione neque saepe non repellendus molestiae quam.</h4>

        </div>
    </div>
    </>
  )
}
