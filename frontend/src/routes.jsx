import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignUp from "./pages/Auth/Signup.jsx"
import Login from "./pages/Auth/Login.jsx"
import EventsPage from "./pages/EventsPage.jsx";
export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/logout" element={<Navigate to="/" replace />} />
                <Route path="/eventos" element={<EventsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}
