import { Route, Routes } from "react-router-dom";

import { Home } from "../Containers/Home";
import { Movies } from "../Containers/Movies";
import { Series } from "../Containers/Series";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Detail } from "../Containers/Detail";

export function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/filmes" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route path="/detalhe/:id" element={<Detail />} />
			</Route>
		</Routes>
	);
}
