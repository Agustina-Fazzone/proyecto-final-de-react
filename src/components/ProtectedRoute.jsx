// src/components/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  const location = useLocation()

  // Si está logueado, renderiza las rutas hijas
  if (isLoggedIn) return <Outlet />

  // Si no, manda a /login (guardando desde dónde vino)
  return <Navigate to="/login" replace state={{ from: location }} />
}
