import React from 'react'
import CalenderComponent from './CalenderComponent'
import Card from './Card'

export default function Calender() {
  return (
    <div className="bg-gray-900 rounded-lg px-6 pt-6 h-full">
        <Card titleLeft="Calender" titleRight="View All">
            <CalenderComponent/>
        </Card>
    </div>
  )
}
