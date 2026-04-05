import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // ← MUDE AQUI
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedTypes?: ('client' | 'clinic')[];
}

export const ProtectedRoute = ({ children, allowedTypes }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-olive" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedTypes && !allowedTypes.includes(user.type)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};