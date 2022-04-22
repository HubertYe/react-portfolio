import '../App.css';
import React from 'react';
import {useNavigate, useParams} from "react-router-dom"


function About() {
	let navigate = useNavigate();
	let {username} = useParams();
	return (
		<div>
			<h1>
				About Page for {username}
			</h1>
			<button onClick={()=>{navigate("/")}}>
				This is a button
			</button>
		</div>
	);
}

export default About;