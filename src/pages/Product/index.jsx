import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const user = async () => {
      const { data } = await axios.get("http://localhost:4000/search");
      setUser(data);
    };
    user();
  }, []);

  console.log("veri", users ? users : "");

  return (
    <div className="container" style={{ backgroundColor: "#DADADA" }}>
      <div className="row">
        <table>
          {users &&
            users.map((x, i) => (
              <>
                <tr>
                  <th>
                    <div>
                    <img
                        style={{
                          maxWidth: "222px",
                          height: "222px",
                          borderRadius: "8px",
                          objectFit: "contain",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          zIndex: "2",
                        }}
                        src={x.image}
                      />
                    </div>
                  </th>
                  <th>{x.name}</th>
                  <th>{x.BoostClock}</th>
                  <th>{x.MemorySize}</th>
                  <th>{x.TDP}</th>
                </tr>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Product;
