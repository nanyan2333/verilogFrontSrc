import React from "react"
import Layout from "../components/Layout/index"
import NoPermission from "../view/noPermission"
import Login from "../view/login"
import NotFound from "../view/NotFound"
import RequireAuth from "./RequireAuth"
import Course from "../view/course"
import Experiment from "../view/experiment"

import Home from "../view/home"

import User from "../view/user"
import Search from "../view/search"


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
				path: "/search",
				element: (
					<RequireAuth role='2'>
						<Search />
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
				path: "user",
				element: (
					<RequireAuth role='2'>
						<User />
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
