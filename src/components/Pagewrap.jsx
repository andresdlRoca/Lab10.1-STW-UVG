import React, { useState, useRef } from "react"
import backgroundIMG from "../assets/background.jpg"
import kanji from "../assets/vaporwaveKanji.png"
import car from "../assets/car.gif"
import Calculator from "./Calculator"
import bladerunner from "../assets/bladerunner.mp3"
import sweetsmile from "../assets/sweet.mp3"
import "./styles/Pagewrap.css"

export default function Pagewrap() {

	const [audiosrc, setAudio] = useState("")
	const audioRef = useRef()

	//Manejo de cambio de audio de fondo
	const actualizarMusica = (src) => {
		setAudio(src)
		if(audioRef.current && !audioRef.current.paused) {
			audioRef.current.pause()
		} else {
			audioRef.current.pause()
			audioRef.current.load()
			audioRef.current.play()
		}
	}

	return (
		<div className="page-wrap" style={{ backgroundImage: `url(${backgroundIMG})`}} >
			<Calculator />
			<img className="kanjiImg" src={kanji} alt="Kanji" onClick={() => actualizarMusica(sweetsmile)}/>
			<img className="carImg" src={car} alt="Spinning car" onClick={() => actualizarMusica(bladerunner)}/>
			<audio className="audiosource" autoPlay={false} loop={false} ref={audioRef}><source type="audio/mp3" src={audiosrc}/></audio>
		</div>
  
	)
}