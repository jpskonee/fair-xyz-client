import React, {FC, useState} from 'react'
import {ImageCardProps} from "../../ts/interface/ui-interface"


const ImageCard:FC<ImageCardProps> = ({src, alt}) => {

  const [showImg, setShowImg] = useState(false)
  const [showText, setShowText] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})


  const revealImgHandler = () => {
    setShowImg(!showImg)
  }

  //getting mouse current position
  const revealTextHandler = (event: any) => {
        setShowText(true)
        const x = event.pageX;
        const y = event.pageY
        setMousePosition({x: x-50,y: y -25})
  }

  //hidding helper text
  const hideCursorTip = (event: any) => {
      setShowText(false)
  }


  return (
    <div onClick={revealImgHandler} onMouseLeave={hideCursorTip} className="hover:cursor-pointer">
        <div className="overflow-hidden">
          <img onPointerMove={revealTextHandler} src={src}  className={`relative backdrop-blur-0 ${showImg ? "" : "blur-md"} mouse hover:after:cur transition-all ease-linear duration-1000`} alt={alt} />
        </div>
        <div style={{top: `${mousePosition.y}px`, left:  `${mousePosition.x}px`}} className={`absolute select-none ${showText ? "" : "hidden"} text-lg`}>Click to {showImg ? "Hide" : "Reveal"}</div>
    </div>
  )
}

export default ImageCard