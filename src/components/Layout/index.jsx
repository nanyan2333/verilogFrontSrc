import React from "react"
import { Outlet } from "react-router-dom"
import TopNav from "./topNav"

const Main = () => {
	return (
		<div className='flex flex-col h-screen w-screen overflow-hidden'>
			<div>
				<TopNav></TopNav>
			</div>
			<div className="p-4 w-full h-full overflow-auto">
				<Outlet />
			</div>
		</div>
	)
}

export default Main
