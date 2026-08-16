import { useState } from 'react'
import Navbar from './components/Navbar'
import BankingPage from './pages/BankingPage'
import ProductivityPage from './pages/ProductivityPage'

export default function App() {
  const [page, setPage] = useState('banking')
  return <main className={`app ${page}`}>
    <Navbar page={page} onNavigate={setPage} />
    {page === 'banking' ? <BankingPage /> : <ProductivityPage />}
  </main>
}
