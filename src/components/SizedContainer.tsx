import { FC, ReactNode } from "react"

interface SizedContainerProps {
	children: ReactNode
}

const SizedContainer: FC<SizedContainerProps> = ({
	children,
}) => {
	return (
		<div className="max-w-[800px] mx-auto">{children}</div>
	)
}
export default SizedContainer
