'use client'

import React from 'react'
import { useState, useEffect } from 'react'

interface Application {
  id: string
  name: string
  email: string
  position: string
}

export default function ApplicationsTable() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/applications')
        if (response.ok) {
          const data = await response.json()
          setApplications(data)
        } else {
          throw new Error('Failed to fetch applications')
        }
      } catch (error) {
        console.error('Error fetching applications:', error)
        alert('Error loading applications data')
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div className="rounded-md border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-3 px-4 text-left font-medium">Name</th>
            <th className="py-3 px-4 text-left font-medium">Email</th>
            <th className="py-3 px-4 text-left font-medium">Position</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-b">
              <td className="py-3 px-4">{app.name}</td>
              <td className="py-3 px-4">{app.email}</td>
              <td className="py-3 px-4">{app.position}</td>
            </tr>
          ))}
          {applications.length === 0 && (
            <tr>
              <td colSpan={3} className="py-8 text-center text-gray-500">
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
} 