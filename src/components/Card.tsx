import { FC, ReactNode } from "react"
import Button from "./Button"

interface CardProps {
	title: string
	subtitle: string
	description: ReactNode
	imageSrc: string
}

const Card: FC<CardProps> = ({
	title,
	subtitle,
	description,
	imageSrc,
}) => {
	return (
		<div className="max-w-[380px] md:max-w-[600px] flex flex-col gap-4 ">
			<div className="flex flex-col gap-4 md:grid md:grid-cols-2 ">
				<div className=" h-[190px] md:h-full md:order-1">
					<img
						src={imageSrc}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex flex-col">
					<h3 className="text-3xl ">{title}</h3>
					<p className="text-sm text-white/80">
						{subtitle}
					</p>
					<div className=" pt-4">{description}</div>
				</div>
			</div>

			<div className="flex flex-col gap-1 md:flex-row md:gap-0">
				<Button>Go to page</Button>
				<Button isSecondary>See on GitHub</Button>
			</div>
		</div>
	)
}
export default Card
