import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const BaseScreen = () => {

    return (
        <>
            <Header />
            <main className="container">
            <Outlet />
            </main>
        </>
    );
};
export default BaseScreen;