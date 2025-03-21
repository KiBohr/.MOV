import { ReactElement } from "react";

interface Props {
	items: ReactElement[];
}

export const Carousel: React.FunctionComponent<Props> = ({ items }) => {
	if (!items || items.length < 0) {
		return <div>loading…</div>;
	}
	return (
		<div className='carousel rounded-box'>
			{items.map((item) => (
				<div className='carousel-item'>{item}</div>
			))}
		</div>
	);
};
