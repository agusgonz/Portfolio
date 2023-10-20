import { FC } from "react"
import Button from "./Button"

interface CardProps {
	title: string
	description: string
	imageSrc: string
	tags: string[]
	pageLink: string
	githubLink: string
}

const Card: FC<CardProps> = ({
	title,
	description,
	imageSrc,
	tags,
	pageLink,
	githubLink,
}) => {
	return (
		<div className="max-w-[380px] md:max-w-[600px] flex flex-col gap-4 ">
			<div className="flex flex-col gap-4 md:grid md:grid-cols-2 ">
				<div className=" h-[190px] md:h-full md:order-1">
					<img
						src={imageSrc}
						className="w-full h-full object-cover snap-center"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-3xl">{title}</h3>
					<p className=" text-sm text-white/80">
						{description}
					</p>
					<ul className="flex flex-wrap gap-x-2 text-sm text-yellow">
						{tags.map(tag => {
							return <li key={tag}>{tag}</li>
						})}
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-1 md:flex-row md:gap-0">
				<Button href={pageLink}>Go to page</Button>
				<Button
					href={githubLink}
					isSecondary
				>
					See on GitHub
				</Button>
			</div>
		</div>
	)
}
export default Card
