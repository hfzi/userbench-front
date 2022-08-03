import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

export default function Profile(userDetails) {
  let { username } = useParams();

  const [otheruser, setOtherUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      };
      console.log(userDetails.user.user.email);
      const { data } = await axios.get(
        `http://localhost:4000/search?user=${username}`,
        config
      );
      setOtherUser(data[0]);
      console.log("asd", otheruser);
    };
    getUser();
  }, []);

  const user = userDetails.user.user;
  const logout = () => {
    window.open(`http://localhost:4000/auth/logout`, "_self");
  };

  const removeProduct = async (prod, cate, image) => {
    await axios.get(
      `http://localhost:4000/delete?product=${prod}&category=${cate}&img=${image}`,
      { withCredentials: true }
    );
    // var datasend = axios.post(`http://localhost:4000/add`,{product})
    console.log("eklendi2", prod, cate);
    window.location.reload();
  };

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div className="col-12">
          <div>
            <img src={user.picture && user.picture} />
            {otheruser.name}
          </div>
        </div>
        {/* <div>{user.email}</div> */}
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
                  style={{
                    maxWidth: "222px",
                    height: "222px",
                    borderRadius: "8px",
                    objectFit: "contain",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    zIndex:"2",
                    position:"absolute"
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
