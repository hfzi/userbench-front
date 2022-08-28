import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const user = async () => {
      const { data } = await axios.get(process.env.REACT_APP_HOST + "/search");
      setUser(data);
    };
    user();
  }, []);

  console.log("veri", users ? users : "");

  return (
    <div className="container" style={{ backgroundColor: "#DADADA" }}>
      <div className="row">

          {users &&
            users.map((x, i) => (
              <div key={i} className="col-3" style={{ padding: "10px" }}>
                <div
                  style={{
                    maxWidth: "222px",
                    height: "222px",
                    borderRadius: "8px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "white",
                  }}
                >
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
                      position: "absolute",
											// left: "38px",
											// left: "14%",
											// bottom: "48px"
                    }}
                    src={x.image}
                  />
                  <img
                    style={{
                      maxWidth: "222px",
                      height: "222px",
                      borderRadius: "8px",
                      objectFit: "contain",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      zIndex: "1",
                      position: "absolute",
                    }}
                    src="/images/white.png"
                  />
                </div>
                <div className="col-12">
                  <h6>{x.name}</h6>
                  <h6>{x.ProcessSize}</h6>
                  <h6>{x.BoostClock}</h6>
                  <h6>{x.MemorySize}</h6>
                  <h6>{x.TDP}</h6>
                </div>
              </div>
            ))}

      </div>
    </div>
  );
}

export default Product;
