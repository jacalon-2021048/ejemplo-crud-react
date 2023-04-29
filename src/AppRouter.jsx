import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { ListUser } from "./user/components/ListUser"
import { isUserAuthenticated } from "./login/helpers/isUserAuthenticated"
import { CreateUser } from "./user/components/CreateUser"


export const AppRouter = () => {
    return (
        <>
            {/* <div className="container">
                <h1>AppRouter</h1>
                <Login />
            </div> */}
            <NavBar />
            <Routes>
                <Route path="/" element={isUserAuthenticated() ? (
                    <ListUser />
                ) : (
                    <Navigate to="/login" />
                ) } >
                </Route>
                <Route path="/add/user" element={
                    isUserAuthenticated() ? <CreateUser/> : <Navigate to="/login" />
                }>
                </Route>
                <Route path="/login" element={
                    !isUserAuthenticated() ? <Login/> : <Navigate to="/" />
                }>
                </Route>
            </Routes>
        </>
    )
}
