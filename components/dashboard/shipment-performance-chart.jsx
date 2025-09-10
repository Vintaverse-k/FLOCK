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
    <div
      className="shipment-performance"
      style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #DFE1E7',
        boxShadow: '0px 1px 2px 0px #0D0D120F',
        width: '100%',
        // maxWidth:'744px',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <h3 style={{ margin: 0, fontWeight: 600 }}>Shipment Performance</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <select style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid #ccc' }}>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              color: '#666',
            }}
            title="Refresh"
          >
            &#10227;
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: '28px' }}>
          5,340{' '}
          <span style={{ color: '#4caf50', fontWeight: 500, fontSize: '16px' }}>
            ↑ 4.3%
          </span>{' '}
          <span style={{ color: '#666', fontWeight: 400, fontSize: '16px' }}>
            from last period
          </span>
        </h2>
      </div>

      <div style={{ flex: 1 }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ShipmentPerformance;
