"use client"
import Dashboard from '@/components/Dashboard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const DashboardPage = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    // If there is no session, redirect to login page after the component renders
    if (!session) {
      router.push('/login')
    }
  }, [session, router]) // The effect will run when `session` or `router` changes

  // While session is being checked, return null or a loading spinner
  if (!session) return null

  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default DashboardPage
