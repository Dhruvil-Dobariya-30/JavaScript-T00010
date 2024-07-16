let allData = document.getElementById("allData");
let loadData = JSON.parse(localStorage.getItem("Data"));
let option1 = document.getElementById("select1");
let option2 = document.getElementById("values");
let types = document.getElementById("types");

let month = loadData.map((data) => data.month);
let profit = loadData.map((data) => data.profit);
let sale = loadData.map((data) => data.sales);
let expense = loadData.map((data) => data.expenses);
let profitPercentage = loadData.map((data) => data.profitPercentage);
let customerSatisfaction = loadData.map((data) => data.customerSatisfaction);
let customers = loadData.map((data) => data.customers);
let newCustomers = loadData.map((data) => data.newCustomers);
let averageOrder = loadData.map((data) => data.averageOrderValue);

const profitChart = document.getElementById("profit");
const saleExpenses = document.getElementById("sale-expenses");
const profitPercentageChart = document.getElementById("profitPercentage");
const customerSatisfactionChart = document.getElementById(
  "customerSatisfaction"
);
const dynamicChart = document.getElementById("dynamicChart");
const customerChart = document.getElementById("customers");
const NewcustomerChart = document.getElementById("Newcustomers");
const averageOrderChart = document.getElementById("avg");

let bcg1 = [
  "#0A2342",
  "#1A3A5E",
  "#2B517A",
  "#3C6996",
  "#4D81B2",
  "#5E99CE",
  "#6FB1EA",
  "#80C9FF",
  "#91E1FF",
  "#A2F9FF",
  "#B3FFFF",
  "#C4FFFF",
];
let bcg2 = [
  "#D5A021",
  "#E8B94A",
  "#FBD273",
  "#FFEB9C",
  "#FFF4C5",
  "#FFFDED",
  "#F0F4F8",
  "#E1E9F0",
  "#D2DEE8",
  "#C3D3E0",
  "#B4C8D8",
  "#A5BDD0",
];

function dynamicCharts() {
  const selectedType = types.value;
  const selectedData = loadData.map((item) => item[option2.value]);
  console.log(selectedData);

  new Chart(dynamicChart, {
    type: selectedType,
    data: {
      labels: month,
      datasets: [
        {
          label: `${option2.value}`,
          data: selectedData,
          borderWidth: 3,
          borderColor: bcg1,
          backgroundColor: bcg2,
          fill: false,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{ ticks: { min: 0 } }],
      },
    },
  });
}

function analyse() {
  dynamicCharts();
}

dynamicCharts();

new Chart(saleExpenses, {
  type: "line",
  data: {
    labels: month,
    datasets: [
      {
        data: sale,
        borderColor: "#0A2342",
        fill: false,
        label: "Sales",
      },
      {
        data: expense,
        borderColor: "#D5A021",
        fill: false,
        label: "Expenses",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

new Chart(profitPercentageChart, {
  type: "doughnut",
  data: {
    labels: month,
    datasets: [
      {
        label: "Profit Percentage",
        data: profitPercentage,
        backgroundColor: bcg2,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

new Chart(customerSatisfactionChart, {
  type: "bar",
  data: {
    labels: month,
    datasets: [
      {
        label: "Customer Satisfaction",
        data: customerSatisfaction,
        fill: true,
        backgroundColor: bcg2,
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(customerChart, {
  type: "line",
  data: {
    labels: month,
    datasets: [
      {
        label: "All Customers",
        data: customers,
        borderColor: "#0A2342",
        pointStyle: "rectRounded",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

new Chart(NewcustomerChart, {
  type: "line",
  data: {
    labels: month,
    datasets: [
      {
        label: "New Customers",
        data: newCustomers,
        borderColor: "#D5A021",
        pointStyle: "rectRounded",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

new Chart(averageOrderChart, {
  type: "polarArea",
  data: {
    labels: month,
    datasets: [
      {
        label: "Average Order Value",
        data: averageOrder,
        backgroundColor: bcg1,
        borderColor: bcg2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
  plugins: {
    title: {
      display: true,
      text: "Average Order Value",
    },
  },
});
