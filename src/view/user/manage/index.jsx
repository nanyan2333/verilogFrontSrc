import { Tabs, Tab } from "@mui/material"
import { useState } from "react"
import Pannel from "./pannel"
import Account from "./account"
import Course from "./course"
function getProps(index) {
	return {
		id: `tab-${index}`,
		"aria-controls": `tabpanel-${index}`,
	}
}
const tabName = ["账号管理", "课程管理"]
export default function Manage() {
	const [value, setValue] = useState(0)

	return (
		<div className='w-full h-full'>
			<Tabs value={value} onChange={(e, v) => setValue(v)}>
				{tabName.map((name, index) => (
					<Tab label={name} {...getProps(index)} key={name} />
				))}
			</Tabs>
			<Pannel value={value} index={0}>
				<Account />
			</Pannel>
			<Pannel value={value} index={1}>
				<Course />
			</Pannel>
		</div>
	)
}
