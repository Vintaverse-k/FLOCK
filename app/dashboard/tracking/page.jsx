"use client"

import { useState } from "react"
import { TrackingHeader } from "@/components/tracking/tracking-header"
import { TrackingStats } from "@/components/tracking/tracking-stats"
import { TrackingTable } from "@/components/tracking/tracking-table"
import { AddTrackingModal } from "@/components/tracking/add-tracking-modal"

export default function TrackingPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [trackingData, setTrackingData] = useState([
    {
      trackingNo: "TRK-78412",
      orderId: "ORD-10234",
      customerName: "Sarah Mitchell",
      originCity: "Newark, NJ",
      destinationCity: "Los Angeles, CA",
      carrier: "FedEx",
      status: "Delivered",
    },
    {
      trackingNo: "TRK-78413",
      orderId: "ORD-10235",
      customerName: "John Doe",
      originCity: "Austin, TX",
      destinationCity: "Seattle, WA",
      carrier: "UPS",
      status: "In Transit",
    },
    {
      trackingNo: "TRK-78414",
      orderId: "ORD-10236",
      customerName: "Emily Johnson",
      originCity: "Miami, FL",
      destinationCity: "Chicago, IL",
      carrier: "DHL",
      status: "Pending",
    },
  ])

  const handleAddTracking = (newTracking) => {
    setTrackingData([newTracking, ...trackingData])
  }

  return (
    <div className="space-y-6">
      <TrackingHeader onAddTracking={() => setIsAddModalOpen(true)} />
      <TrackingStats trackingData={trackingData} />
      <TrackingTable trackingData={trackingData} />

      <AddTrackingModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddTracking} />
    </div>
  )
}
