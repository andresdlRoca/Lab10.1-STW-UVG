/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { fireEvent, getByTestId, render } from "@testing-library/react"
import React from "react"
import Calculator from "../components/Calculator"

describe("Testing component calculator", () => {


	it("Testing display component reacting to keys", () => {
		const { container } = render(<Calculator/>)
		const display = getByTestId(container, "display-test")
		const oneButton = getByTestId(container, "oneKey-test")
		const twoButton = getByTestId(container, "twoKey-test")
		const threeButton = getByTestId(container, "threeKey-test")
		fireEvent.click(oneButton)
		fireEvent.click(twoButton)
		fireEvent.click(threeButton)
		expect(display.textContent).toBe("123")
	})

	it("Testing clear key", () => {
		const { container } = render(<Calculator/>)
		const display = getByTestId(container, "display-test")
		const clearButton = getByTestId(container, "clear-test")
		const oneButton = getByTestId(container, "oneKey-test")
		fireEvent.click(oneButton)//Display will show 1
		expect(display.textContent).toBe("1")
		fireEvent.click(clearButton)
		expect(display.textContent).toBe("")
	})

	it("Testing sum operations of calc", () => {
		const { container } = render(<Calculator/>)
		const display = getByTestId(container, "display-test")
		const oneButton = getByTestId(container, "oneKey-test")
		const twoButton = getByTestId(container, "twoKey-test")
		const threeButton = getByTestId(container, "threeKey-test")
		const equalButton = getByTestId(container, "equals-test")
		const sumButton = getByTestId(container, "sum-test")
		//Test sum 1+2+3=6
		fireEvent.click(oneButton)
		fireEvent.click(sumButton)
		fireEvent.click(twoButton)
		fireEvent.click(sumButton)
		fireEvent.click(threeButton)
		fireEvent.click(equalButton)
		expect(display.textContent).toBe("6")

	})

	it("Testing error on display when going over 9 digits", () => {
		const { container } = render(<Calculator/>)
		const display = getByTestId(container, "display-test")
		const oneButton = getByTestId(container, "oneKey-test")
		const zeroButton = getByTestId(container, "zeroKey-test")
		const equalButton = getByTestId(container, "equals-test")
		const mulButton = getByTestId(container, "mul-test")
		fireEvent.click(oneButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(mulButton)
		fireEvent.click(oneButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(zeroButton)
		fireEvent.click(equalButton)
		expect(display.textContent).toBe("ERROR***")
	})

	it("Testing negative numbers error", () => {
		const { container } = render(<Calculator/>)
		const display = getByTestId(container, "display-test")
		const oneButton = getByTestId(container, "oneKey-test")
		const zeroButton = getByTestId(container, "zeroKey-test")
		const equalButton = getByTestId(container, "equals-test")
		const minusButton = getByTestId(container, "minus-test")

		fireEvent.click(zeroButton)
		fireEvent.click(minusButton)
		fireEvent.click(oneButton)
		fireEvent.click(equalButton)
		expect(display.textContent).toBe("ERROR***")
	})

})