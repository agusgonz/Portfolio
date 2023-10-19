import React, { FC, ReactNode } from "react"
import { cn } from "../utils/utils"

interface LayoutProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({
	children,
	className,
}) => {
	return (
		<div className={cn("", className)}>
			<div className=" container mx-auto px-8 py-8">
				{children}
			</div>
		</div>
	)
}
export default Layout
