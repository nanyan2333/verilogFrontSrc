import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import NotificationProvider from "./components/NotificationProvider"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "@/utils/theme" // 引入你定义的主题

import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<NotificationProvider>
						<CssBaseline />
						<App />
					</NotificationProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
