'use client'

import React from 'react'
import { useState } from 'react'
import ApplicationDialog from './ApplicationDialog'
import ApplicationsTable from './ApplicationsTable'

export default function CTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showTable, setShowTable] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-10">
          Want to help us build<br />
          the future of safe AI?
      </h2>
        <div className="space-y-4">
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="btn-primary text-lg px-12 py-3 w-full sm:w-auto"
          >
            See open roles
          </button>
          <div>
            <button
              onClick={() => setShowTable(prev => !prev)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {showTable ? 'Hide Applications' : 'View Applications'}
            </button>
          </div>
        </div>
      </div>

      {showTable && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Applications</h3>
          <ApplicationsTable />
        </div>
      )}

      <ApplicationDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  )
} 