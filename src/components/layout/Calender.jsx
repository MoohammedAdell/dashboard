import React from 'react'
import CalenderComponent from './CalenderComponent'
import Card from './Card'

export default function Calender() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm transition-colors">
      <Card titleLeft="Calendar" titleRight="View All">
        <CalenderComponent />
      </Card>
    </div>
  )
}