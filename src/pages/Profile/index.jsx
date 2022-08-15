import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  let { username } = useParams();

  const [otheruser, setOtherUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/search?user=${username}&token=${localStorage.getItem(
          "token"
        )}`,
        { withCredentials: true }
      );
      setOtherUser(data[0]);
      console.log(username)
    };
    getUser();
  }, [username]);

  const removeProduct = async (prod, cate, image) => {
    await axios.get(
      `http://localhost:4000/delete?product=${prod}&category=${cate}&img=${image}&token=${localStorage.getItem(
        "token"
      )}`,
      { withCredentials: true }
    );

    console.log("eklendi2", prod, cate);
    window.location.reload();
  };

  return (
    <div className="container" style={{ backgroundColor: "#DADADA" }}>
      <div className="row">
        <div className="col-12">
          <div>
            <img alt={otheruser.name} src={otheruser.photo && otheruser.photo} />
            {otheruser.name}
          </div>
        </div>

        {otheruser.product &&
          otheruser.product.map((x, i) => (
            <div key={i} className="col-3 p-4" style={{ padding: "10px" }}>
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
                 alt={otheruser.name} 
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
                  }}
                  src={x.image}
                />
                <img
                 alt={otheruser.name} 
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
              </div>
              <div className="col-12">
                <button
                  onClick={() => removeProduct(x.name, x.category, x.img)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
