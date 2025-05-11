import React from "react"
import Layout from "../components/Layout/index"
import NoPermission from "../view/noPermission"
import Login from "../view/login"
import NotFound from "../view/NotFound"
import RequireAuth from "./RequireAuth"
import Course from "../view/course"
import Experiment from "../view/experiment"

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
				path: "",
				element: (
					<RequireAuth role='2'>
						<Home />
					</RequireAuth>
				),
			},
			{
				path: "course/:id",
				element: (
					<RequireAuth role='2'>
						<Course />
					</RequireAuth>
				),
			},
			{
				path: "experiment/:id",
				element: (
					<RequireAuth role='2'>
						<Experiment />
					</RequireAuth>
				),

			},
			{
				path: "about",
				element: (
					<RequireAuth role='1'>
						<About />
					</RequireAuth>
				),
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
