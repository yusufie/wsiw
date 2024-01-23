"use client";
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const FavoriteButton = () => {
    const [isHeart, setIsHeart] = useState(true);
  return (
    <button onClick={(e) => setIsHeart(!isHeart)}>
    <span className="">
      {" "}
      {isHeart ? (
        <FaHeart size={32} color="be185d" />
      ) : (
        <FiHeart size={32} color="be185d"/>
      )}{" "}
    </span>
  </button>
  )
}

export default FavoriteButton
