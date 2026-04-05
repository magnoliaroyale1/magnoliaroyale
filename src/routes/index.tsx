import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { RegisterClinic } from '../pages/RegisterClinic';
import { ClinicsList } from '../pages/ClinicsList';
import { ClinicPage } from '../pages/ClinicPage';
import { DashboardClient } from '../pages/DashboardClient';
import { DashboardClinic } from '../pages/DashboardClinic';
import { Chat } from '../pages/Chat';
import { Blog } from '../pages/Blog';
import { Ranking } from '../pages/Ranking';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-clinic" element={<RegisterClinic />} />
      <Route path="/clinics" element={<ClinicsList />} />
      <Route path="/clinic/:id" element={<ClinicPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ranking" element={<Ranking />} />
      
      <Route path="/dashboard/client" element={
        <ProtectedRoute allowedTypes={['client']}>
          <DashboardClient />
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard/clinic" element={
        <ProtectedRoute allowedTypes={['clinic']}>
          <DashboardClinic />
        </ProtectedRoute>
      } />
      
      <Route path="/chat" element={
        <ProtectedRoute>
          <Chat />
        </ProtectedRoute>
      } />
    </Routes>
  );
};