'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ShipmentsByRegion = () => {
  const data = {
    labels: ['North America', 'Europe', 'Asia-Pacific', 'Others'],
    datasets: [
      {
        data: [2800, 2200, 1900, 200],
        backgroundColor: ['#f44336', '#ffb300', '#26a69a', '#03a9f4'],
        borderWidth: 0,
        cutout: '75%',
        circumference: 180,
        rotation: 270,
        borderRadius: 8,
        spacing: 5
      }
    ]
  };

  const options = {
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(0);
            return `${label}: ${percentage}% (${value.toLocaleString()})`;
          }
        }
      }
    },
    cutout: '75%',
    circumference: 180,
    rotation: 270,
    animation: {
      animateRotate: true,
      animateScale: true,
    }
  };

  const totalShipment = data.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div
      className="shipments-by-region"
      style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #DFE1E7',
        boxShadow: '0px 1px 2px 0px #0D0D120F',
        width: '352px',
        fontFamily: "'Inter', sans-serif",
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ margin: 0, fontWeight: 600, fontSize: '18px' }}>Shipments by Region</h3>
        <button
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#666',
            padding: '4px 6px',
            borderRadius: '6px',
            transition: 'background-color 0.2s',
          }}
          title="Refresh"
          onClick={() => window.location.reload()}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          &#10227;
        </button>
      </div>

      <div
        style={{
          position: 'relative',
          width: 288,
          height: 288,
          margin: '0 auto',
        }}
      >
        <Doughnut
          data={data}
          options={options}
          width={288}
          height={288}
        />
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          <div style={{ fontSize: 14, color: '#888', fontWeight: 500 }}>
            Total Shipment
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>
            {totalShipment.toLocaleString()}
          </div>
        </div>
      </div>

      <ul
        style={{
          marginTop: 20,
          padding: 0,
          listStyle: 'none',
          fontSize: 14,
          fontWeight: 500,
          color: '#444',
        }}
      >
        {data.labels.map((label, i) => {
          const value = data.datasets[0].data[i];
          const percent = ((value / totalShipment) * 100).toFixed(0);
          const color = data.datasets[0].backgroundColor[i];
          return (
            <li
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: 12,
                    height: 12,
                    backgroundColor: color,
                    borderRadius: '50%',
                  }}
                />
                {label} <span style={{ color: '#888', fontWeight: 400 }}>({percent}%)</span>
              </span>
              <span style={{ color: '#666', fontWeight: 400 }}>
                {value.toLocaleString()}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShipmentsByRegion;
