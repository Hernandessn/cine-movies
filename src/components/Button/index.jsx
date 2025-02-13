import { ButtonRed, ButtonWhite } from "./styles";

export function Button({ children, red }) {
	return (
		<>
			{red ? (
				<ButtonRed>{children}</ButtonRed>
			) : (
				<ButtonWhite>{children}</ButtonWhite>
			)}
		</>
	);
}
