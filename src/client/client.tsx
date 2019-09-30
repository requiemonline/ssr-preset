import React from 'react'
import { render, hydrate } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
	hydrate(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		root,
	)

	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/service-worker.js')
		})
	}
} else {
	const HotApp = hot(App)
	render(
		<BrowserRouter>
			<HotApp />
		</BrowserRouter>,
		root,
	)
}
