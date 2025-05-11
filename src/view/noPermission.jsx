import React from "react"
import { useNavigate } from "react-router-dom" 
import "../assets/style/NoPermission.css" 

const NoPermission = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(-1) // 返回历史记录中的上一页
	}

	return (
		<div className='no-permission-container'>
			<div className='no-permission-content'>
				<div className='error-code-container-np'>
					<span className='digit-np first-digit-np'>4</span>
					<span className='digit-np zero-digit-np'>
						0
						<div className='lock-icon-np'>
							<div className='lock-shackle-np'></div>
							<div className='lock-body-np'></div>
						</div>
					</span>
					<span className='digit-np last-digit-np'>3</span>
				</div>
				<h2 className='error-message-np'>访问受限！</h2>
				<p className='error-description-np'>
					抱歉，您没有足够的权限访问此页面。
					如果您认为这是一个错误，请尝试联系系统管理员。
				</p>
				<div className='buttons-container-np'>
					<button
						onClick={handleGoBack}
						className='action-button-np go-back-button-np'>
						返回上一页
					</button>
				</div>
			</div>
		</div>
	)
}

export default NoPermission
