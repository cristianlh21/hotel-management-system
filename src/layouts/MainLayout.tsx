import { JSX } from "react";
import { Outlet, Link } from "react-router-dom";

/**
 * @fileoverview Layout principal del sistema.
 * Define la estructura visual común (Sidebar y área de contenido).
 */

/**
 * Componente que sirve de marco para la aplicación.
 * @returns {JSX.Element} Estructura con navegación lateral y contenedor de páginas.
 */
export const MainLayout = (): JSX.Element => {
    return (
        <div className="flex h-screen bg-slate-50">
            {/* Sidebar Simple (Luego la mejoraremos con Shadcn) */}
            <aside className="w-64 bg-white border-r border-slate-200 p-4">
                <h1 className="text-xl font-bold text-primary mb-8">Hotel Admin</h1>
                <nav className="flex flex-col gap-2">
                    <Link to="/" className="p-2 hover:bg-slate-100 rounded">Dashboard</Link>
                    <Link to="/habitaciones" className="p-2 hover:bg-slate-100 rounded">Habitaciones</Link>
                </nav>
            </aside>

            {/* Contenido Dinámico */}
            <main className="flex-1 overflow-auto p-8">
                <Outlet />
            </main>
        </div>
    );
};