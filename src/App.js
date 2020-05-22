import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

const App = () => {
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
          {
            Header: "Language",
            accessor: "show.language",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
