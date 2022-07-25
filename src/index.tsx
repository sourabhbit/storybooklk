import ReactDOM from 'react-dom'
import App from './App'

declare global {
	interface Window {
		chatBotParams: any
		Freshbots: any
		dtm: any
		sprChat: any
		//main-nav
		secondsTimer: any
	}
}
ReactDOM.render(<App />, document.getElementById('root'))
