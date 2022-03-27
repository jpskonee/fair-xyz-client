import React from 'react'
import ImageCard from '../components/UI/ImageCard'
import boredApe from "../assets/img/bored-ape.jpg"

const HomePage = () => {
  return (
    <div className="md:pt-10 bg-gray-50 h-screen">
        <div className="pt-28 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:px-5 md:px-1 my-0 mx-auto  w-11/12 md:w-10/12">
            <div className="w-full h-full">
                <ImageCard src={boredApe} alt="Bored Ape NFT" />
            </div>
            <div className="w-full h-full">
                <ImageCard src={boredApe} alt="Bored Ape NFT" />
            </div>
            <div className="w-full h-full">
                <ImageCard src={boredApe} alt="Bored Ape NFT" />
            </div>
            <div className="w-full h-full">
                <ImageCard src={boredApe} alt="Bored Ape NFT" />
            </div>
        </div>
    </div>
  )
}

export default HomePage