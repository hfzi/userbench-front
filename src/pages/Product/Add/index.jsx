import { useState } from "react";
//import styles from "./styles.module.css";
import axios from "axios";

function Product(userDetails) {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");

  const categoryList = [
    { category: "Laptop" },
    { category: "Headphone" },
    { category: "Mouse" },
    { category: "GPU" },
    { category: "CPU" },
    { category: "Keyboard" },
  ];

  const productList = [
    {
      name: "Macbook Air M1",
      img: "https://cdn.akakce.com/z/apple/macbook-air-mgn63tu-a-apple-m1-8-gb-256-gb-ssd-13-3-notebook.jpg",
      category: "Laptop",
    },
    {
      name: "Macbook M1 Pro",
      img: "https://cdn.akakce.com/z/apple/macbook-pro-myd82tu-a-apple-m1-8-gb-256-gb-ssd-13-3-notebook.jpg",
      category: "Laptop",
    },
    {
      name: "Razer Kraken V3",
      img: "https://iis-akakce.akamaized.net/p.x?%2F%2Freimg-teknosa-cloud-prod%2Emncdn%2Ecom%2Fmnresize%2F600%2F600%2Fproductimage%2F125089171%2F125089171_0_MC%2F64738443%2Ejpg",
      category: "Headphone",
    },
    {
      name: "Razer Deathadder V2",
      img: "https://iis-akakce.akamaized.net/p.x?%2F%2Fn11scdn%2Eakamaized%2Enet%2Fa1%2F1024%2Felektronik%2Fmouse%2Frazer-deathadderv2-rz01-03210100-r3m1-20000-dpi-usb-optik-oyuncu-mouse__1251722768055526%2Epng",
      category: "Mouse",
    },
    {
      name: "Razer Basilisk X",
      img: "https://iis-akakce.akamaized.net/p.x?%2F%2Fn11scdn%2Eakamaized%2Enet%2Fa1%2F1024%2Felektronik%2Fmouse%2Frazer-basilisk-x-hyperspeed-rz01-03150100-r3g1-kablosuz-oyuncu-mouse__1489141568610125%2Ejpg",
      category: "Mouse",
    },
    {
      name: "Asus ROG RTX 3070",
      img: "https://cdn.akakce.com/x/asus/asus-rog-strix-rtx-3070-ti-oc-rog-strix-rtx3070ti-o8g-gaming-256-bit-gddr6x-8-gb.jpg",
      category: "GPU",
    },
    {
      name: "MSI AMD Radeon RX 6800 XT",
      img: "https://iis-akakce.akamaized.net/p.x?%2F%2Fn11scdn%2Eakamaized%2Enet%2Fa1%2F1024%2Felektronik%2Fekran%2Dkarti%2Fmsi%2Damd%2Dradeon%2Drx%2D6800%2Dxt%2Dgaming%2Dtrio%2D16%2Dgb%2Dgddr6%2D256%2Dbit%2Dekran%2Dkarti%5F%5F0869890143239915%2Epng",
      category: "GPU",
    },
    {
      name: "AMD Ryzen 5 5700",
      img: "https://cdn.akakce.com/x/amd/amd-ryzen-5-5600x-alti-cekirdek-3-70-ghz.jpg",
      category: "CPU",
    },
    {
      name: "Intel Core i7 12700k",
      img: "https://iis-akakce.akamaized.net/p.x?%2F%2Fn11scdn%2Eakamaized%2Enet%2Fa1%2F1024%2Felektronik%2Fdiger%2Dbilgisayar%2Dyedek%2Dparcalari%2Fintel%2Dalder%2Dlake%2Dcore%2Di7%2D12700k%2D36ghz%2D1700p%2D25mb%2Dbox%2Dfansiz%2D1%5F%5F1111981639631372%2Ejpg",
      category: "CPU",
    },
    {
      name: "Razer Cynosa V2",
      img: "https://iis-akakce.akamaized.net/p.x?%2F%2Fn11scdn%2Eakamaized%2Enet%2Fa1%2F1024%2Felektronik%2Fklavye%2Frazer%2Drz03%2D03401300%2Dr3l1%2Dcynosa%2Dv2%2Dchroma%2Dusb%2Dkablolu%2Dmembran%2Dtr%2Dq%2Dklavye%5F%5F0743120633596223%2Ejpg",
      category: "Keyboard",
    },
    {
      name: "Razer Ornata Chroma V2",
      img: "https://cdn.akakce.com/razer/razer-ornata-chroma-v2-rz03-03381300-r3l1-kablolu-oyuncu-si-x.jpg",
      category: "Keyboard",
    },
  ];

  const user = userDetails.user;
  console.log("user", user);
  /* 	const logout = () => {
    window.open(`https://userbench-back.vercel.app/auth/logout`, "_self");
  }; */

  const addproduct = () => {
    var datasend = axios.get(
      `https://userbench-back.vercel.app/add?product=${product}&category=${category}`,
      { withCredentials: true }
    );
    // var datasend = axios.post(`https://userbench-back.vercel.app/add`,{product})
    console.log("eklendi");
  };

  const addproduct2 = async (prod, cate, image) => {
    await axios.get(
      `https://userbench-back.vercel.app/add?product=${prod}&category=${cate}&img=${image}`,
      { withCredentials: true }
    );

    // await fetch(`https://userbench-back.vercel.app/add?product=${prod}&category=${cate}&img=${image}`, {
    //   method: 'GET',
    //   mode: 'cors',
    //   xhrFields: { withCredentials: true },
    //   credentials: 'include'
    // })

    // var datasend = axios.post(`https://userbench-back.vercel.app/add`,{product})
    console.log("eklendi2", prod, cate);
  };

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div className="col-12">
          Country:{" "}
          <select defaultValue={"choose"}
            className="custom-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="choose" >Choose Category . . .</option>
            <option value="all">All</option>
            {categoryList.map((x, i) => (
              <option key={i} value={x.category}>{x.category}</option>
            ))}
          </select>
        </div>

        {productList && productList
          .filter((val) => {
            if (category == "all") {
              return val;
            } else if (
              val.category.toLowerCase().includes(category.toLowerCase())
            ) {
              return val;
            }
          })
          .map((x, i) => (
            <div key={i} className="col-3" style={{ padding: "10px" }}>
              <div style={{ maxWidth: "222px", height: "222px", borderRadius: "8px", display: "block", marginLeft: "auto", marginRight: "auto", backgroundColor: "white" }}>
                <img style={{ maxWidth: "222px", height: "222px", borderRadius: "8px", objectFit: "contain", display: "block", marginLeft: "auto", marginRight: "auto", zIndex: "2", position: "absolute" }} src={x.img} />
                <img style={{ maxWidth: "222px", height: "222px", borderRadius: "8px", objectFit: "contain", display: "block", marginLeft: "auto", marginRight: "auto", zIndex: "1", position: "absolute" }} src="/images/white.png" />
              </div>
              <div className="col-12" /* style={{position: "relative"}} */><h6>{x.name}</h6></div>
              <div className="col-12" /* style={{position: "relative"}} */><button onClick={() => addproduct2(x.name, x.category, x.img)} style={{ marginLeft: "10px" }} className="col-6">I have</button></div>
            </div>
          ))}

      </div>
      <input type="textbox" onChange={(e) => setProduct(e.target.value)} />
      <button onClick={addproduct}>Add</button>
    </div>
  );
}

export default Product;
