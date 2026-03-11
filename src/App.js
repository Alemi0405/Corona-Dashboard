import React, { useState } from "react";
import "./App.css";

function App() {
  const states = [
    {
      name: "Andhra Pradesh",
      confirmed: 2328002,
      active: 0,
      recovered: 2313609,
      deaths: 14733,
    },
    {
      name: "Arunachal Pradesh",
      confirmed: 67000,
      active: 50,
      recovered: 66500,
      deaths: 450,
    },
    {
      name: "Assam",
      confirmed: 740000,
      active: 500,
      recovered: 732000,
      deaths: 8000,
    },
    {
      name: "Bihar",
      confirmed: 850000,
      active: 300,
      recovered: 838000,
      deaths: 9500,
    },
    {
      name: "Chhattisgarh",
      confirmed: 1180000,
      active: 600,
      recovered: 1160000,
      deaths: 14000,
    },
    {
      name: "Goa",
      confirmed: 260000,
      active: 120,
      recovered: 255000,
      deaths: 3900,
    },
    {
      name: "Gujarat",
      confirmed: 1300000,
      active: 700,
      recovered: 1280000,
      deaths: 11000,
    },
    {
      name: "Haryana",
      confirmed: 1050000,
      active: 500,
      recovered: 1035000,
      deaths: 10500,
    },
    {
      name: "Himachal Pradesh",
      confirmed: 320000,
      active: 200,
      recovered: 315000,
      deaths: 5100,
    },
    {
      name: "Jharkhand",
      confirmed: 450000,
      active: 200,
      recovered: 444000,
      deaths: 5800,
    },
    {
      name: "Karnataka",
      confirmed: 4100000,
      active: 12000,
      recovered: 4050000,
      deaths: 41000,
    },
    {
      name: "Kerala",
      confirmed: 6820000,
      active: 21000,
      recovered: 6750000,
      deaths: 71000,
    },
    {
      name: "Madhya Pradesh",
      confirmed: 1100000,
      active: 400,
      recovered: 1089000,
      deaths: 10700,
    },
    {
      name: "Maharashtra",
      confirmed: 8100000,
      active: 20000,
      recovered: 7900000,
      deaths: 148000,
    },
    {
      name: "Manipur",
      confirmed: 140000,
      active: 100,
      recovered: 138000,
      deaths: 2100,
    },
    {
      name: "Meghalaya",
      confirmed: 96000,
      active: 70,
      recovered: 94500,
      deaths: 1500,
    },
    {
      name: "Mizoram",
      confirmed: 230000,
      active: 90,
      recovered: 228000,
      deaths: 700,
    },
    {
      name: "Nagaland",
      confirmed: 36000,
      active: 20,
      recovered: 35200,
      deaths: 800,
    },
    {
      name: "Odisha",
      confirmed: 1350000,
      active: 500,
      recovered: 1339000,
      deaths: 9100,
    },
    {
      name: "Punjab",
      confirmed: 800000,
      active: 300,
      recovered: 783000,
      deaths: 17000,
    },
    {
      name: "Rajasthan",
      confirmed: 1300000,
      active: 600,
      recovered: 1290000,
      deaths: 9600,
    },
    {
      name: "Sikkim",
      confirmed: 45000,
      active: 30,
      recovered: 44200,
      deaths: 500,
    },
    {
      name: "Tamil Nadu",
      confirmed: 3600000,
      active: 10000,
      recovered: 3550000,
      deaths: 38000,
    },
    {
      name: "Telangana",
      confirmed: 840000,
      active: 400,
      recovered: 835000,
      deaths: 4100,
    },
    {
      name: "Tripura",
      confirmed: 110000,
      active: 60,
      recovered: 108000,
      deaths: 1000,
    },
    {
      name: "Uttar Pradesh",
      confirmed: 2100000,
      active: 900,
      recovered: 2076000,
      deaths: 23000,
    },
    {
      name: "Uttarakhand",
      confirmed: 450000,
      active: 200,
      recovered: 442000,
      deaths: 7600,
    },
    {
      name: "West Bengal",
      confirmed: 2100000,
      active: 800,
      recovered: 2078000,
      deaths: 21000,
    },

    {
      name: "Delhi",
      confirmed: 2050000,
      active: 700,
      recovered: 2015000,
      deaths: 26500,
    },
    {
      name: "Jammu and Kashmir",
      confirmed: 480000,
      active: 300,
      recovered: 473000,
      deaths: 5200,
    },
    {
      name: "Ladakh",
      confirmed: 30000,
      active: 20,
      recovered: 29600,
      deaths: 230,
    },
    {
      name: "Puducherry",
      confirmed: 175000,
      active: 100,
      recovered: 173000,
      deaths: 2000,
    },
    {
      name: "Chandigarh",
      confirmed: 100000,
      active: 50,
      recovered: 98500,
      deaths: 1200,
    },
    {
      name: "Andaman and Nicobar Islands",
      confirmed: 11000,
      active: 5,
      recovered: 10800,
      deaths: 130,
    },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      confirmed: 12000,
      active: 10,
      recovered: 11800,
      deaths: 120,
    },
    {
      name: "Lakshadweep",
      confirmed: 12000,
      active: 5,
      recovered: 11850,
      deaths: 45,
    },
  ];

  const india = {
    confirmed: 43744158,
    active: 99716,
    recovered: 43122134,
    deaths: 526052,
    
  };

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const state = states.find(
      (s) => s.name.toLowerCase() === value.toLowerCase(),
    );

    setSelected(state || null);
  };

  const data = selected ? selected : india;

  return (
    <div className="container">
      <h1>COVID-19 India Tracker</h1>

      <input
        type="text"
        placeholder="Search state..."
        value={search}
        onChange={handleSearch}
      />

      {search && (
        <div className="suggestions">
          {states
            .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
            .map((s, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(s);
                  setSearch(s.name);
                }}
              >
                {s.name}
              </div>
            ))}
        </div>
      )}

      <h2>{selected ? selected.name : "India (All States)"}</h2>

      <div className="cards">
        <div className="card confirmed">
          <h2>Confirmed</h2>
          <h1>{data.confirmed.toLocaleString()}</h1>
        </div>

        <div className="card active">
          <h2>Active</h2>
          <h1>{data.active.toLocaleString()}</h1>
        </div>

        <div className="card recovered">
          <h2>Recovered</h2>
          <h1>{data.recovered.toLocaleString()}</h1>
        </div>

        <div className="card deaths">
          <h2>Deaths</h2>
          <h1>{data.deaths.toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
