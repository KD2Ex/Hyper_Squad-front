import { observer } from "mobx-react-lite"
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import users from "../store/users"


const AppRouter = observer(() => {
    const loggedUser = users.loggedUser;
    
    return (
        <Routes>
            {loggedUser === null 
                ? publicRoutes.map(item => (
                    <Route key={item.path} path={item.path} element={item.element}/>
                ))
                : privateRoutes.map(item => (
                    <Route key={item.path} path={item.path} element={item.element}/>
                ))
            }
        </Routes>
    )
})

export default AppRouter;