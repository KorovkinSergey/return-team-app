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
			light: '#BF3535',
			main: '#aa0505',
			dark: '#A80404',
			contrastText: '#fbca03',
		},
		secondary: {
			light: '#7D2D2C',
			main: '#EBF2FA',
			dark: '#7068D4',
			contrastText: '#231C00',
		},
		success: {
			light: '#FCD742',
			main: '#fbca03',
			dark: '#b97d10',
			contrastText: '#231C00',
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
	</ThemeProvider>
)
