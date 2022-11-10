import React, { useContext, useEffect, useState } from "react";

import useClock from "../../Hooks/useClock";
import MyContext from "../../Context/my-context";

export default function MyMagicComponent(props) {
	const { name, onChangeName } = useContext(MyContext);

	const { clock } = useClock();

	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log(`Count changed to ${count}`);
	}, [count]);

	const [magicNumber, setMagicNumber] = useState(0);
	useEffect(() => {
		console.log(`Magic number changed to ${magicNumber}`);
	}, [magicNumber]);

	const [usersName, setUsersName] = useState(localStorage.getItem("usersName"));
	useEffect(() => {
		console.log(`Name changed to ${usersName}`);
		localStorage.setItem("usersName", usersName);
	}, [usersName]);

	const makeMagic = () => {
		console.log(`Magic Number changed to ${magicNumber}`);
		localStorage.setItem("magicNumber", magicNumber);
		if (magicNumber > 55) {
			throw new Error("อู๊ปสสสสสส์! เรามีแมลงให้จัดการครับนาย 👾🐱‍🏍");
		}
		return magicNumber;
	};

	makeMagic();

	return (
		<>
			<h1
				style={{
					backgroundColor: "orange",
					color: "white",
					fontFamily: "Helvetica",
				}}
			>
				<span>Clock : {clock} [custom hooks: useClock]</span>
			</h1>
			<h1>Sup, {props.name || name || "man"}!</h1>
			<p>
				You've clicked <strong>{count}</strong> times!
			</p>
			<p>
				You've "magically" clicked{" "}
				<strong>{magicNumber > 0 ? magicNumber + count : count}</strong> times!
			</p>

			<p>
				{" "}
				Here is your random number: <strong>{magicNumber}</strong>
			</p>
			<button
				style={{
					fontFamily: "Helvetica",
					fontWeight: "600",
					padding: 8,
					border: "none",
					background: "green",
					color: "white",
				}}
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click me
			</button>
			<button
				style={{
					fontFamily: "Helvetica",
					fontWeight: "600",
					padding: 8,
					border: "none",
					background: "red",
					color: "white",
				}}
				onClick={() => {
					setCount(0);
				}}
			>
				Reset
			</button>
			<button
				style={{
					fontFamily: "Helvetica",
					fontWeight: "600",
					padding: 8,
					border: "none",
					background: "purple",
					color: "white",
				}}
				onClick={() => {
					setMagicNumber(Math.floor(Math.random() * 101));
				}}
			>
				Magic!
			</button>
			<p>
				Nice to meet you. My name's <strong>{name || "_________"}</strong>
			</p>
			<input
				type='text'
				placeholder='username'
				value={name}
				onChange={(e) => {
					onChangeName(e.target.value);
				}}
			/>
		</>
	);
}
