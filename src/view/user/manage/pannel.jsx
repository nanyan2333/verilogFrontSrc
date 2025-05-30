export default function Pannel({ children, value, index, option }) {
	return <div role='tabpanel' {...option}>{value === index && <div>{children}</div>}</div>
}
