import { useState } from "react";
import Axios from "axios";

function Dashboard() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [description, setDescription] = useState("");


  

  const [recordList, setRecordList] = useState([]);
  
  const addRecord = () => {
    Axios.post("http://localhost:1337/api/create", {
      name: name,
      qty: qty,
      description: description,
    
    }).then(() => {
      setRecordList([
        ...recordList,
        {
          name: name,
          qty: qty,
          description: description,
        
        },
      ]);
    });
  };

  const getRecord = () => {
    Axios.get("http://localhost:1337/employees").then((response) => {
      setRecordList(response.data);
    });
  };

  const updateRecordQty = (id) => {
    Axios.put("http://localhost:1337/update", { wage: newQty, id: id }).then(
      (response) => {
        setRecordList(
          recordList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  description: val.description,
                  qty: newQty,
                  
                }
              : val;
          })
        );
      }
    );
  };

  const deleteRecord = (id) => {
    Axios.delete(`http://localhost:1337/delete/${id}`).then((response) => {
      setRecordList(
        recordList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>QTY:</label>
        <input
          type="number"
          onChange={(event) => {
            setQty(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
               
         />
        <button onClick={addRecord}>Add Record</button>
      </div>
      <div className="records">
        <button onClick={getRecord}>Show Record</button>

        {recordList.map((val, key) => {
          return (
            <div className="record">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>QTY: {val.qty}</h3>
                <h3>Description: {val.description}</h3>
              </div>
              <div>
                
                <button
                  onClick={() => {
                    updateRecordQty(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteRecord(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;