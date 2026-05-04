import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { JSX } from "react";

/**
 * @fileoverview Configuración del mapa de rutas del hotel.
 * Se agrega el 'basename' para que funcione correctamente en GitHub Pages.
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <div className="text-2xl font-semibold p-4">Bienvenido al Dashboard</div>,
            },
            {
                path: "habitaciones",
                element: <div className="text-2xl font-semibold p-4">Inventario de Habitaciones</div>,
            },
        ],
    },
], {
    /** * IMPORTANTE: El basename debe coincidir exactamente con el nombre de tu repo 
     */
    basename: "/hotel-management-system"
});

export const AppRouter = (): JSX.Element => {
    return <RouterProvider router={router} />;
};