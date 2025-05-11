import React from "react"
import Layout from "../components/Layout/index"
import NoPermission from "../view/noPermission"
import Login from "../view/login"
import NotFound from "../view/NotFound"
import RequireAuth from "./RequireAuth"
import Course from "../view/course"
import Experiment from "../view/experiment"

import Home from "../view/home"
import StudentHome from "../view/student"
import About from "../view/about"
import CourseList from "../view/student/CourseList";
import HistoryCourse from "../view/student/CourseList/HistoryCourse.jsx";

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
				path: "student-home",
				element: (
					<RequireAuth role='2'>
						<StudentHome />
					</RequireAuth>
				),
			},
			{
				path: "course-list",
				element: (
					<RequireAuth role='2'>
						<CourseList/>
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
				path: "history",
				element: (
					<RequireAuth role='2'>
						<HistoryCourse />
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
