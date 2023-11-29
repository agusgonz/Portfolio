import { ArrowUpRight } from "lucide-react"
import { FC, ReactNode } from "react"

interface ButtonProps {
	children: ReactNode
	isSecondary?: boolean
	href?: string
	isOutsidePage?: boolean
}

const Button: FC<ButtonProps> = ({
	children,
	isSecondary,
	href,
	isOutsidePage,
}) => {
	return (
		<a
			target="_blank"
			href={href || "/"}
			className={`py-2 inline-block w-full h-full text-center text-sm border-2 border-yellow  ${
				isSecondary
					? "text-yellow hover:text-yellow/90"
					: "bg-yellow text-dark-gray hover:bg-yellow/90"
			}`}
		>
			{children}
			{isOutsidePage && (
				<ArrowUpRight className="inline w-3 h-3 relative bottom-1" />
			)}
		</a>
	)
}
export default Button
