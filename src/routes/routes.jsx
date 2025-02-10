import { Route, Routes} from 'react-router-dom';


import { Home } from '../Containers/Home';
import { Movies } from '../Containers/Movies';
import { Series } from '../Containers/Series';


export function Router(){


    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/filmes' element={<Movies />}/>
            <Route path='/series' element={<Series />}/>
        </Routes>
    )
};