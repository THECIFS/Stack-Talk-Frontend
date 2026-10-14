import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import Autenticacion from './pages/autenticacion-page';
import Home from './pages/home-page';
import { AuthProvider } from './context/auth-context';
import { ProtectedRoute } from './hooks/protected-route';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/autenticacion' element={<Autenticacion />} />
          <Route path='/home' element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
