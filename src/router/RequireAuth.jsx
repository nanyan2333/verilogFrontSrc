import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const getCurrentUserRole = () => {
	const role = useSelector((state) => state.user.role)
	return role
}
const isLogIn = () => {
	const f = useSelector((state) => state.user.isLogIn)
	return f
}

const RequireAuth = ({ children, role }) => {
	console.log(children,role);
	const location = useLocation()
	const userRole = getCurrentUserRole()
	const isLog = isLogIn()
	if (!isLog) return <Navigate to='/login' replace state={{ from: location }} />
	if (role && userRole !== role) {
		// 没权限，跳转 403
		return <Navigate to='/403' replace state={{ from: location }} />
	}

	// 有权限，放行
	return children
}

export default RequireAuth
