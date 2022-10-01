import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { WindowSizeContextProvider } from './context/WindowSizeContext'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = createTheme({
	palette: {
		primary: {
			light: '#aa0505',
			main: '#6a0c0b',
			dark: '#4b0908',
			contrastText: '#fbca03',
		},
		success: {
			light: '#aa0505',
			main: '#6a0c0b',
			dark: '#b97d10',
			contrastText: '#fbca03',
		},
		secondary: {
			light: '#fbca03',
			main: '#e39a1a',
			dark: '#b97d10',
			contrastText: '#aa0505',
		},
		common: {
			black: '#fbca03',
			white: '#6a0c0b',
		},
	},
})

root.render(
	<ThemeProvider theme={theme}>
		<AuthContextProvider>
			<WindowSizeContextProvider>
							<App />
			</WindowSizeContextProvider>
		</AuthContextProvider>
	</ThemeProvider>,
)
