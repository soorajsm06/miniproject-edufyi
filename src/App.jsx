import Navbar from './components/Navbar'
import BankingPage from './pages/BankingPage'
import ProductivityPage from './pages/ProductivityPage'

export default function App() {
  const isManagersPage = window.location.pathname === '/managers'
  return <main className={`app ${isManagersPage ? 'productivity' : 'banking'}`}>
    {!isManagersPage && <Navbar />}
    {isManagersPage ? <ProductivityPage /> : <BankingPage />}
  </main>
}
