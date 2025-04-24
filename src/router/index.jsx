import React from "react"
import Layout from "../components/Layout/index"
import NoPermission from "../view/noPermission"
import Login from "../view/login"
import NotFound from "../view/NotFound"
import RequireAuth from "./RequireAuth"

import Home from "../view/home"
import About from "../view/about"

const routes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/403",
		element: <NoPermission />,
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
	// 404 兜底
	{
		path: "*",
		element: <NotFound />,
	},
]

export default routes
