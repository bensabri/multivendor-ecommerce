import { useGlobalContext } from '../../context/Context';

interface iProps {
	icon?: JSX.Element;
	color?: string;
	bgHoverColor?: string;
	size?: string;
	borderRadius?: string;
	width?: string;
	text?: string;
	bgColor?: string;
}

const Button = ({
	icon,
	bgColor,
	color,
	borderRadius,
	size,
	width,
	bgHoverColor,
	text,
}: iProps) => {
	const { setIsClicked, initialState } = useGlobalContext();

	return (
		<button
			type="button"
			onClick={() => setIsClicked(initialState)}
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
		>
			{icon} {text}
		</button>
	);
};

export default Button;
