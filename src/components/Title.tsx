import { FC } from "react"

interface TitleProps {
	text: string
}

const Title: FC<TitleProps> = ({ text }) => {
	return (
		<h2 className=" text-4xl text-yellow ">
			{text} <hr className="border mt-2" />
		</h2>
	)
}
export default Title
