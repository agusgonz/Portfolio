import { ArrowUpRight } from "lucide-react"
import React, { FC, ReactNode } from "react"
import { cn } from "../utils/utils"

interface LinkOutsidePageProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	href: string
}

const LinkOutsidePage: FC<LinkOutsidePageProps> = ({
	children,
	href,
	className,
}) => {
	return (
		<a
			href={href}
			target="_blank"
			className={cn(className, "")}
		>
			<span>{children}</span>
			<ArrowUpRight className="inline w-3 h-3 relative bottom-1 " />
		</a>
	)
}
export default LinkOutsidePage
