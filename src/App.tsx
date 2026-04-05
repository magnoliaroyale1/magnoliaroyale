import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { NavigationBar } from './components/Navbar'
import { AppRoutes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavigationBar />
        <main style={{ paddingTop: '80px' }}>
          <AppRoutes />
        </main>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App