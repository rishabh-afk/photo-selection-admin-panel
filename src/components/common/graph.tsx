import React, { useEffect, useRef } from 'react';

// Declare global window.Chart to avoid TypeScript errors
declare let Chart: any;

interface PyramidBarChartProps {
  xAxisLabels: string[];
  xAxisHeading: string;
  yAxisLabels: number[];
  yAxisHeading: string;
  data: number[];
}

const PyramidBarChart: React.FC<PyramidBarChartProps> = ({
  xAxisLabels,
  xAxisHeading,
  // yAxisLabels,
  yAxisHeading,
  data,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Load Chart.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js'; // Chart.js CDN link
    script.onload = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: xAxisLabels,
            datasets: [
              {
                label: yAxisHeading,
                data: data,
                backgroundColor: 'rgba(0, 137, 123, 0.8)', // Gradient fill color
                borderRadius: 12, // Rounded bars
                barThickness: 40, // Ensure bars aren't too thick
              },
            ],
          },
          options: {
            responsive: true, // Make the chart responsive
            indexAxis: 'x', // Horizontal bars
            plugins: {
              legend: {
                display: false, // Hide legend for clarity
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
                ticks: {
                  padding: 10, // Add some space between the bars and labels
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
                ticks: {
                  padding: 10, // Add space between the Y-axis labels and bars
                },
              },
            },
            layout: {
              padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 40, // Ensure there's enough space at the bottom
              },
            },
            animation: {
              duration: 1000, // Animation duration for smooth transitions
            },
          },
        });
      }
    };

    // Append the script tag to the head of the document to load Chart.js
    document.head.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [data, xAxisLabels, yAxisHeading]);

  return (
    <div className="flex justify-center items-center h-auto w-full p-6 bg-[#FCF8F8] rounded-lg shadow-md overflow-hidden">
      <div className="w-full">
        <h2 className="text-center font-bold text-xl mb-4">{xAxisHeading}</h2>
        <canvas ref={canvasRef} style={{ width: '100%', height: 'auto' }}></canvas>
        <h2 className="text-center font-bold text-xl mt-4">{yAxisHeading}</h2>
      </div>
    </div>
  );
};

export default PyramidBarChart;
