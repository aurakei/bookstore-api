import React from 'react'
import Card from './Card';
import { FaBeer, FaSearch } from 'react-icons/fa';

export default function Main() {
  return (
    <>
    <div className="header">
        <div className="row1">
            <h1>A room without books is like <br></br> a body without a soul</h1>
        </div>
        <div className="row2">
            <h2>Find Your Soul</h2>
            <FaBeer />
            <div className="search">
                <input type="text" placeholder='Fill in your Book name' />
                <button><FaSearch /></button>
            </div>
            <img src="./images/bg4.jpg" alt="" />
        </div>
    </div>
    <div className="container">
      <Card />
    </div>
    </>
  )
}
