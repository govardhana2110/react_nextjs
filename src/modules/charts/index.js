import React, { useEffect, useRef } from 'react';
import './style.css';
import Chart from 'chart.js/auto';

export default function App() {
  const acordianList = ['one', 'two', 'three'];
  const [acrdnName, setAcrdnName] = React.useState('');
  const chartLineRef = useRef(null);
  const chartBarRef = useRef(null);
  const chartPieRef = useRef(null);
  const chartDoughnutRef = useRef(null);

  let myLineChart;
  let myBarChart;
  let myPieChart;
  let myDoughnutChart;
  const onClickEvent = (name) => {
    setAcrdnName(name);
  };

  const lineChart = () => {
    const ctx = chartLineRef.current.getContext('2d');
    if (myLineChart) {
      myLineChart.destroy();
    }
    myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const barChart = () => {
    const ctx = chartBarRef.current.getContext('2d');
    if (myBarChart) {
      myBarChart.destroy();
    }
    myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const pieChart = () => {
    const ctx = chartPieRef.current.getContext('2d');
    if (myPieChart) {
      myPieChart.destroy();
    }
    myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  };

  const doughnutChart = () => {
    const ctx = chartDoughnutRef.current.getContext('2d');
    if (myDoughnutChart) {
      myDoughnutChart.destroy();
    }
    myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  };
  useEffect(() => {
    lineChart();
    barChart();
    pieChart();
    doughnutChart();
    return () => {
      if (myLineChart) {
        myLineChart.destroy();
      }
      if (myBarChart) {
        myBarChart.destroy();
      }
      if (myPieChart) {
        myPieChart.destroy();
      }
      if (myDoughnutChart) {
        myDoughnutChart.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartLineRef} width={400} height={400}></canvas>
      <canvas ref={chartBarRef} width={400} height={400}></canvas>
      <canvas ref={chartPieRef} width={400} height={400}></canvas>
      <canvas ref={chartDoughnutRef} width={400} height={400}></canvas>
      {acordianList.map((item) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          key={item}
        >
          <div
            style={{ border: '1px solid', borderRadius: '15%' }}
            onClick={() => onClickEvent(item)}
          >
            {' '}
            {item}
          </div>
          {acrdnName === item && <div>Accordian {item} clicked</div>}
        </div>
      ))}
    </div>
  );
}
