import React, { Suspense } from "react"
import { BrowserRouter, useRoutes } from "react-router-dom"
import routes from "./router/index"
import RequireAuth from "./router/RequireAuth"

// 用于包裹 useRoutes 的组件
const AppRoutes = () => {
	const element = useRoutes(routes)
	return element
}

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<AppRoutes />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
