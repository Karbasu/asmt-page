import React, { useEffect } from 'react';
import './PopulationChart.css'
import Chart from 'chart.js/auto';

const PopulationChart = () => {
  useEffect(() => {
    // Define the URL of the API
    const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

    // Function to fetch and process the data
    async function fetchData() {
      try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract and format the data as needed
        const populationData = data.data;

        // Create arrays for years and population
        const years = populationData.map(entry => entry.Year);
        const population = populationData.map(entry => entry.Population);

        // Create a bar chart
        const ctx = document.getElementById('population-chart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: years,
            datasets: [{
              label: 'Population',
              data: population,
              backgroundColor: 'rgb(75, 192, 192)',
              borderWidth: 1,
            }]
          },
          options: {
            scales: {
              x: {
                type: 'category',
                beginAtZero: true,
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function to initiate the API request
    fetchData();
  }, []);

  return (
    <div>
      <h1>Population Bar Chart</h1>
      <div className="Pop_chart">
        <canvas id="population-chart" ></canvas>
      </div>
    </div>
  );
};

export default PopulationChart;
