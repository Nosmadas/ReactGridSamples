import React from 'react';
import { Link } from 'react-router';
import Spreadsheet from '../components/Spreadsheet';
import DataGrid from '../components/DataGrid';

require('style!css!../home.css')

const Home = () => (
  <div>
    <h1>Home</h1>

    <Spreadsheet />
    <DataGrid />
    <p>Link to a route using the &lt;Link&gt; component:</p>

    <Link to="/counter">
      Go to Counter
    </Link>
  </div>
);

export default Home;
