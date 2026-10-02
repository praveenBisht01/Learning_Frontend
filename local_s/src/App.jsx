import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
    const [data, setdata] = useState([]);

    const get_data = async () => {
      const response = await axios.get("https://picsum.photos/v2/list");
      setdata(response.data);
    };
  
  return (
    <div>
      <button id='btn' onClick={get_data}> Get data</button>
      {data.map(function(elem,idx) {
        return <h3> {idx}  hello {elem.author} </h3>
      })}
    </div>
  )
}

export default App
