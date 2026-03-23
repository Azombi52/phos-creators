import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Public pages
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import ExploreCreatorsPage from './pages/ExploreCreatorsPage'
import CreatorStorefrontPage from './pages/CreatorStorefrontPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

// Dashboard (nested)
import DashboardLayout from './pages/dashboard/DashboardLayout'
import OverviewPage from './pages/dashboard/OverviewPage'
import ProjectsPage from './pages/dashboard/ProjectsPage'
import ClientsPage from './pages/dashboard/ClientsPage'
import MessagesPage from './pages/dashboard/MessagesPage'
import ContractsPage from './pages/dashboard/ContractsPage'
import PaymentsPage from './pages/dashboard/PaymentsPage'
import StorefrontPage from './pages/dashboard/StorefrontPage'
import SettingsPage from './pages/dashboard/SettingsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PublicLayout({ children, hideFooter = false }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/how-it-works" element={<PublicLayout><HowItWorksPage /></PublicLayout>} />
          <Route path="/explore" element={<PublicLayout><ExploreCreatorsPage /></PublicLayout>} />
          <Route path="/storefront" element={<PublicLayout><CreatorStorefrontPage /></PublicLayout>} />
          <Route path="/pricing" element={<PublicLayout><PricingPage /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />

          {/* Auth */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected dashboard */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<OverviewPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="contracts" element={<ContractsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="storefront" element={<StorefrontPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          <Route path="*" element={<PublicLayout><HomePage /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
