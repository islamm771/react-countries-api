import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "../pages/Index";
import Country from "../pages/Country";
import Layout from "../pages/Layout";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";



export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />} errorElement={<ErrorHandler />}>
            <Route index element={<Index />} />
            <Route path="/:name" element={<Country />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
    </>
));