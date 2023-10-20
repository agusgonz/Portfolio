import { FC, ReactNode } from "react"

interface ButtonProps {
	children: ReactNode
	isSecondary?: boolean
	href?: string
}

const Button: FC<ButtonProps> = ({
	children,
	isSecondary,
	href,
}) => {
	return (
		<a
			target="_blank"
			href={href || "/"}
			className={`py-2 inline-block w-full h-full text-center text-sm border-2 border-yellow  ${
				isSecondary
					? "text-yellow"
					: "bg-yellow text-dark-gray"
			}`}
		>
			{children}
		</a>
	)
}
export default Button
