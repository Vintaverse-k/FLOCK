"use client"

import { useState } from "react"
import { CompaniesHeader } from "@/components/companies/companies-header"
import { CompaniesTable } from "@/components/companies/companies-table"
import { AddCompanyModal } from "@/components/companies/add-company-modal"

export default function CompaniesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Apple Inc.",
      address: "1 Apple Park Way, Cupertino, CA",
      phone: "(704) 555-0129",
      url: "https://www.apple.com",
      category: "Consumer Electronics",
      avatar: "A",
    },
    {
      id: 2,
      name: "Microsoft Corp.",
      address: "1 Microsoft Way, Redmond, WA",
      phone: "(425) 555-0100",
      url: "https://www.microsoft.com",
      category: "Software & Services",
      avatar: "M",
    },
  ])

  const handleAddCompany = (newCompany) => {
    setCompanies((prev) => [newCompany, ...prev])
  }

  return (
    <div className="space-y-6">
      <CompaniesHeader onAddCompany={() => setIsAddModalOpen(true)} />
      <CompaniesTable companies={companies} />

      <AddCompanyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddCompany={handleAddCompany}
      />
    </div>
  )
}
