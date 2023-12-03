import React, { FC, ReactNode } from "react"
import { cn } from "../utils/utils"
import SizedContainer from "./SizedContainer"
import ObserverAnimation from "./ObserverAnimation"

interface SectionLayoutProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	animate?: boolean
	delay?: number
	id?: string
}

const SectionLayout: FC<SectionLayoutProps> = ({
	children,
	className,
	animate,
	delay,
	id,
}) => {
	return (
		<section
			id={id}
			className={cn("", className)}
		>
			<div className=" px-8 py-12">
				{animate ? (
					<ObserverAnimation delay={delay}>
						<SizedContainer>{children}</SizedContainer>
					</ObserverAnimation>
				) : (
					<SizedContainer>{children}</SizedContainer>
				)}
			</div>
		</section>
	)
}
export default SectionLayout
