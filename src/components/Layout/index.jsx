import React from "react"
import { Outlet } from "react-router-dom"
import TopNav from "./topNav"

const Main = () => {
	return (
		<div className="flex flex-col h-screen w-screen overflow-hidden">
			<TopNav></TopNav>
			<Outlet />
		</div>
	)
}

export default Main
