'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

import "../../styles/shipmentper.css";

const ShipmentPerformance = () => {
  const data = {
    labels: [
      'Aug 7, 2025',
      'Aug 8, 2025',
      'Aug 9, 2025',
      'Aug 10, 2025',
      'Aug 11, 2025',
      'Aug 12, 2025',
      'Aug 13, 2025',
    ],
    datasets: [
      {
        label: 'Delivered',
        data: [490, 470, 485, 450, 470, 500, 485],
        borderColor: '#f44336',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'In Transit',
        data: [390, 320, 370, 355, 365, 380, 340],
        borderColor: '#03a9f4',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'Pending',
        data: [260, 250, 265, 230, 240, 280, 200],
        borderColor: '#ffb300',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'Delayed',
        data: [110, 140, 145, 100, 120, 90, 130],
        borderColor: '#26a69a',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          boxWidth: 10,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          drawBorder: false,
          color: '#eee',
        },
        ticks: {
          maxTicksLimit: 6,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 7,
        },
      },
    },
  };

  return (
    <div className="shipment-performance-card">
      <div className="shipment-header">
        <h3>Shipment Performance</h3>
        <div className="shipment-controls">
          <select>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <button title="Refresh">&#10227;</button>
        </div>
      </div>

      <div className="shipment-summary">
        <h2>
          5,340 <span className="percent">↑ 4.3%</span> <span className="period">from last period</span>
        </h2>
      </div>

      <div className="chart-container">
        <div className="chart-scroll">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ShipmentPerformance;
