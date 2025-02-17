import './App.css'
import Hero from './sections/Hero/Hero'
import { Projects } from './sections/Projects/Projects'
import { Skills } from './sections/Skills/Skills'
import Axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
	const [catFact, setCatFact] = useState('')

	const fetchCat = () => {
		Axios.get('https://catfact.ninja/fact').then((res) => {
			setCatFact(res.data.fact)
		})
	}
	useEffect(() => {
		fetchCat()
	}, [])


	//
	const [name, setName] = useState('')
	const [predictedAge, setPredictedAge] = useState(null)
	const fetchData = () => {
		Axios.get(`https:/api.agify.io/?name=${name}`).then((res) => {
			setPredictedAge(res.data)
		})
	}

	return (
		<>
			<div className='fetchName'>
				<input
					placeholder='Ex. Pedro..'
					onChange={(event) => setName(event.target.value)}
				/>
				<button onClick={fetchData}>Predict Age</button>
				<h2>Name : {predictedAge?.name} </h2>
				<h2>Age : {predictedAge?.age} </h2>
				<h2>Count Number : {predictedAge?.count} </h2>
			</div>




			<div className='fetch'>
				<h1> Generate Cat Fact </h1>
				<button onClick={fetchCat}> Click Me</button>
				<p>{catFact}</p>
			</div>

			<Hero />
			<Projects />
			<Skills />
		</>
	)
}

export default App
