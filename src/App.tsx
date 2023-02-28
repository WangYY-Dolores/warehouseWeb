import { ItemTable, RowData } from './components/ItemTable'
import React, { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getShipment } from './service/index';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [fetchedData, setFetchedData] = useState<RowData[]>([]);

  const handleChange = (inputValue:any) => {
    setInputValue(inputValue.target.value)
  }

  const btnHandleClick = async () => {
    const information = await getShipment("\"" + inputValue + "\"");
    setFetchedData(information['data']);
  }
  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid xs={12} container alignItems="center" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Shipment Report
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Enter Shipper ID:
          </Typography>
          <div style={{ width: "100%" }}>
            <input type="text" onChange={handleChange} value={inputValue}/>
          </div>
          <span style={{width:"100%"}}>
            <button onClick={btnHandleClick}>submit</button>
          </span>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Items Table
          </Typography>
          <div>
            <ItemTable data={fetchedData}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
