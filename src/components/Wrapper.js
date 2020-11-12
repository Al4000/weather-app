import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Box, Card, Image,	Heading, Text} from 'rebass'
import { Label, Input } from '@rebass/forms'

const Wrapper = () => {
	const URL = 'https://api.openweathermap.org/data/2.5/weather'
	const API_KEY = process.env.REACT_APP_API

	const [weather, setWeather] = useState({})
	const [query, setQuery] = useState('Kirov')

	useEffect(() => {
		axios
			.get(URL, {params:
					{
						q: query,
						units: 'metric',
						appid: API_KEY
					}
			})
		.then(response => setWeather(response.data))
	}, [API_KEY, query])

	const handlePress = (e) => {
		if (e.key === 'Enter') {
			setQuery(e.target.value)
		}
	}

	return (
		<Box width={512}>
			<Label htmlFor="city" fontSize={22}>City</Label>
			<Input
				mt={2}
				mb={16}
				id="city"
				name="city"
				type="city"
				placeholder="Enter your city.."
				onKeyPress={handlePress}
			/>
			{weather.main &&
				<Card
					className="background"
					sx={{
						p: 16,
						borderRadius: 6,
						boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
					}}>
					<Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
					<Text fontSize={12}>
						{weather.weather[0].description}
					</Text>
					<Box px={32} py={60}>
						<Heading as='h3'>
							{weather.name}
						</Heading>
						<Text fontSize={16}>
							temperature: {(weather.main.temp).toFixed(1)}°С
						</Text>
						<Text fontSize={16}>
							atmosphere: {weather.weather[0].main}
						</Text>
					</Box>
				</Card>
			}
		</Box>
	)
}

export default Wrapper
