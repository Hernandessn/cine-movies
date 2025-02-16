import { ButtonRed, ButtonWhite } from "./styles";

export function Button({ children, red, ...props }) {
	return (
		<>
			{red ? (
				<ButtonRed {...props}>{children}</ButtonRed>
			) : (
				<ButtonWhite {...props}>{children}</ButtonWhite>
			)}
		</>
	);
}
