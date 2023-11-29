import { useAnimate, useInView } from "framer-motion"
import { FC, ReactNode, useEffect } from "react"

interface ObserverAnimationProps {
	children: ReactNode
	delay?: number
}

const ObserverAnimation: FC<ObserverAnimationProps> = ({
	children,
	delay,
}) => {
	const [scope, animate] = useAnimate()

	const isInView = useInView(scope, { once: true })

	useEffect(() => {
		if (isInView) {
			console.log("change")
			animate(scope.current, {
				opacity: 1,
				transition: {
					type: "spring",
					stiffness: 60,
				},
			})
		}
	}, [isInView])

	const delayTime = delay ? delay : 0.1

	return (
		<div
			className="overflow-hidden "
			ref={scope}
		>
			<div
				className={`${
					isInView ? "none" : "translate-y-[100px]"
				}
				${isInView ? "opacity-100" : "opacity-0"}
			`}
				style={{
					transition: `transform  0.9s ease-in-out ${delayTime}s, opacity 1.5s ease-in-out ${delayTime}s`,
				}}
			>
				{children}
			</div>
		</div>
	)
}
export default ObserverAnimation
