'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import "../../styles/recentshipment.css";

const shipments = [
  {
    id: "SHP-1001",
    origin: "Jakarta, ID",
    destination: "Singapore, SG",
    carrier: "DHL Express",
    status: "In Transit",
    eta: "2025-08-15 14:30",
    weight: "12.4",
    cost: "85.00",
  },
  {
    id: "SHP-1002",
    origin: "Tokyo, JP",
    destination: "Seoul, KR",
    carrier: "FedEx",
    status: "Delivered",
    eta: "2025-08-10 09:00",
    weight: "8.7",
    cost: "120.00",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "In Transit":
      return "bg-yellow-100 text-yellow-800";
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Delayed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

function RecentShipmentActivity() {
  return (
    <Card className="recent-shipment-card">
      <CardHeader className="recent-shipment-header">
        <CardTitle>Recent Shipment Activity</CardTitle>
        <div className="recent-shipment-controls">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <Input placeholder="Search" className="search-input" />
          </div>
          <Button variant="outline" size="sm" className="filter-button">
            <Filter className="filter-icon" />
            <span className="filter-label">Filter</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="table-wrapper">
          <table className="shipment-table">
            <thead>
              <tr className="table-header-row">
                <th><input type="checkbox" /></th>
                <th>Shipment ID</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Carrier</th>
                <th>Status</th>
                <th>ETA Date & Time</th>
                <th>Weight (kg)</th>
                <th>Cost (USD)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment) => (
                <tr key={shipment.id} className="table-row">
                  <td><input type="checkbox" /></td>
                  <td>{shipment.id}</td>
                  <td>{shipment.origin}</td>
                  <td>{shipment.destination}</td>
                  <td>{shipment.carrier}</td>
                  <td>
                    <Badge className={`${getStatusColor(shipment.status)} badge`}>{shipment.status}</Badge>
                  </td>
                  <td>{shipment.eta}</td>
                  <td>{shipment.weight}</td>
                  <td>{shipment.cost}</td>
                  <td>
                    <Button variant="ghost" size="sm" className="more-button">
                      <MoreHorizontal className="more-icon" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentShipmentActivity;
