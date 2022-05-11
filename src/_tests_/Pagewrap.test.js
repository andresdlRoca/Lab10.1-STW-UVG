/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { getByTestId } from "@testing-library/react"
import { fireEvent } from "@testing-library/react"
import { render, screen } from "@testing-library/react"
import React from "react"
import Pagewrap from "../components/Pagewrap"

describe("Testing component Pagewrap", ()=> { 

	it("Render Pagewrap backgroundImg", () => { 
		render(<Pagewrap/>) 
		const testElement = screen.getByTestId("background-img-test")
		expect(testElement).toBeInTheDocument()
	})

	it("Render Pagewrap kanji icon", () => {  
		render(<Pagewrap/>)
		//Search element in DOM with an specific ID
		const testElement = screen.getByTestId("kanji-img-test")
		expect(testElement).toBeInTheDocument()
	})

	it("Render Pagewrap car icon", () => {  
		render(<Pagewrap/>)
		const testElement = screen.getByTestId("car-img-test")
		expect(testElement).toBeInTheDocument()
	})

	it("Pagewrap music render with initial state of an empty string", () => {
		const { container } = render(<Pagewrap/>)
		const containerValue = getByTestId(container, "audio-test")
		expect(containerValue.src).toBe("")
	})

	it("Pagewrap music buttons work", () => {
		const { container } = render(<Pagewrap/>)
		const musicValue = getByTestId(container, "audio-test")
		const kanjiButton = getByTestId(container, "kanji-img-test")
		const carButton = getByTestId(container, "car-img-test")
		expect(musicValue.src).toBe("")
		fireEvent.click(kanjiButton) //Plays music
		expect(musicValue.paused).toBe(true)
		fireEvent.click(carButton) //Play other song
		expect(musicValue.paused).toBe(true)
	})

})