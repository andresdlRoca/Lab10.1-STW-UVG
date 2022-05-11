/**
 * @jest-environment jsdom
 */

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
		<div data-testid="background-img-test" className="page-wrap" style={{ backgroundImage: `url(${backgroundIMG})`}} >
			<Calculator />
			<img data-testid="kanji-img-test" className="kanjiImg" src={kanji} alt="Kanji" onClick={() => actualizarMusica(sweetsmile)}/>
			<img data-testid="car-img-test" className="carImg" src={car} alt="Spinning car" onClick={() => actualizarMusica(bladerunner)}/>
			<audio data-testid="audio-test" className="audiosource" autoPlay={false} loop={false} ref={audioRef}><source type="audio/mp3" src={audiosrc}/></audio>
		</div>
  
	)
}