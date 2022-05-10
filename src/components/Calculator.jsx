import React, { useState } from "react"
import "./styles/Calculator.css"
import startupgif from "../assets/startupgif.gif"


export default function Calculator() {

	const [displayData, setDisplayData] = useState("")
	const [operationData, setOperationData] = useState("")
	const [usingNegatives, setNegatives] =useState(false)

	const operations = ["/", "*", "-", "+", "+/-", "=", "%"]
	//const arithmethicOps = ["/", "*", "-", "+", "%"];

	const inputData = (data) => {

		if(data === "C") {
			setDisplayData("")
			setOperationData("")
			setNegatives(false)
			return
		} else if(displayData.length === 9) {
			return //Exits function
		} else if(
			operations.includes(data) && displayData === "" || 
        operations.includes(data) && operations.includes(displayData.slice(-1))) {
			return //Exits function
		} else if(data === "+/-") {
			if(operations.includes(displayData.charAt(0)) === true) {
				return
			} else {
				setDisplayData("-" + displayData)
				setOperationData("-" + operationData)
				setNegatives(true)
			}
			return
		}
      
		if(!operations.includes(data)) {
			if(operations.includes(operationData.slice(-1))) {
				setDisplayData(data)
				setOperationData(operationData + data)
			} else {
				setDisplayData(displayData + data)
				setOperationData(operationData + data)
			}
		}

		if(operations.includes(data) && data !== "=") {
			if(operations.includes(operationData.slice(-1))) {
				return
			} else {
				setOperationData(operationData + data)
				setDisplayData(eval(operationData).toString())
				setOperationData(eval(operationData).toString() + data)
				if(eval(operationData).toString().charAt(0) === "-" &&usingNegatives === false) {
					setDisplayData("ERROR***")
					setOperationData("")
				} else if (eval(operationData).toString().length > 9) {
					setDisplayData("ERROR***")
					setOperationData("")
				}
			}
			console.log(displayData)
		}

		if(data === "=") {
			if(operations.includes(operationData.slice(-1))) {
				return
			} else {
				setDisplayData(eval(operationData).toString())
				setOperationData(eval(operationData).toString())
				if(eval(operationData).toString().charAt(0) === "-" && usingNegatives === false) {
					setDisplayData("ERROR***")
					setOperationData("")
				} else if (eval(operationData).toString().length > 9) {
					setDisplayData("ERROR***")
					setOperationData("")
				}
			}
		}
	}

	return (
		<div className="CalculatorBody">
			<img src={startupgif} alt="Start Up" className="startupImg"/>
			<div className="overlayAesthethic"></div>
			<div className="stripe"></div>
			<div className="calculatorScreen">
				<p className="inputtedText" >{displayData}</p>
			</div>
			<div className="calculatorLayout">
				<div className="Clear key" onClick={() => inputData("C")}><p>C</p></div>
				<div className="mod key" onClick={() => inputData("%")}><p>%</p></div>
				<div className="plusSlashminus key" onClick={() => inputData("+/-")}><p>+/-</p></div>
				<div className="divide key" onClick={() => inputData("/")}><p>÷</p></div>
				<div className="seven key" onClick={() => inputData("7")}><p>7</p></div>
				<div className="eight key" onClick={() => inputData("8")}><p>8</p></div>
				<div className="nine key" onClick={() => inputData("9")}><p>9</p></div>
				<div className="multiplication key" onClick={() => inputData("*")}><p>×</p></div>
				<div className="four key" onClick={() => inputData("4")}><p>4</p></div>
				<div className="five key" onClick={() => inputData("5")}><p>5</p></div>
				<div className="six key" onClick={() => inputData("6")}><p>6</p></div>
				<div className="substraction key" onClick={() => inputData("-")}><p>-</p></div>
				<div className="one key" onClick={() => inputData("1")}><p>1</p></div>
				<div className="two key" onClick={() => inputData("2")}><p>2</p></div>
				<div className="three key" onClick={() => inputData("3")}><p>3</p></div>
				<div className="sum key" onClick={() => inputData("+")}><p>+</p></div>
				<div className="zero key" onClick={() => inputData("0")}><p>0</p></div>
				<div className="dot key" onClick={() => inputData(".")}><p>.</p></div>
				<div className="equals key" onClick={() => inputData("=")}><p>=</p></div>
			</div>
		</div>
  
	)
}