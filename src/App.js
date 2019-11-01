import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import {
	Container,
	CardHeader,
	Card,
	CardContent,
	Divider,
	Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
	container: {
		height: '100vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}))

const App = () => {
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<Container
				className={classes.container}
				maxWidth="lg"
			>
				<Card>
					<CardHeader
						avatar={<img
							alt="logo"
							className="App-logo"
							src="logo.png"
						        />}
					/>
					<Divider />
					<CardContent>
						<Typography variant="body2">
							This be the starter skeleton!
						</Typography>
					</CardContent>
				</Card>
			</Container>
		</ThemeProvider>
	)
}

export default App
