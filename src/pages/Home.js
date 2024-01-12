import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="nav-bar">
        <Link id="link" to="/">
          cohort 93
        </Link>
        <Link id="link" to="/men">
          Men
        </Link>
        <Link id="link" to="/women">
          Women
        </Link>
        <Link id="link" to="/kids">
          Kids
        </Link>
        <Link id="link" to="/account">
          Account
        </Link>
      </div>
      <div className="brand">COHORT 93</div>
      <div className="credit">
        (** a website by quenton, lynette, matt, and jenna.)
      </div>
      <div className="new-years">Happy New Years!</div>
      <div className="winter">CELEBRATE 2024 WITH NEW WINTER STYLES</div>
      <div className="flex-box">
        <div className="big-flex">
          <div className="box-1">
            <img
              src="https://doronsupply.com/cdn/shop/products/1s_1s__PUFFRONT.png?v=1679626172"
              alt=""
              id="product"
            />
          </div>
          <div className="puffer">PUFFER JACKETS</div>
        </div>
        <div className="big-flex">
          <div className="box-2">
            <img
              src="https://www.bulwark.com/dw/image/v2/BDCD_PRD/on/demandware.static/-/Sites-bulwark-master-catalog/default/dw67894084/SEZ2/PS_BW_SEZ2BK_F.png?sw=800&sh=800"
              alt=""
              id="product"
            />
          </div>
          <div className="puffer">TECH FLEECES</div>
        </div>
        <div className="big-flex">
          <div className="box-3">
            <img
              src="https://www.pngall.com/wp-content/uploads/13/Black-Hoodie-PNG.png"
              alt=""
              id="product"
            />
          </div>
          <div className="puffer">HOODIES</div>
        </div>
        <div className="big-flex">
          <div className="box-4">
            <img
              src="https://pngimg.com/d/gloves_PNG80356.png"
              alt=""
              id="product"
            />
          </div>
          <div className="puffer">ACCESSORIES</div>
        </div>
      </div>

      <div className="update-box">
        <div className="ninety-3">93</div>
        <div className="update">NEWS UPDATE!</div>
        <div className="news">
          <img
            src="https://media.tenor.com/cETTVPZMcxoAAAAM/juju-chang-news.gif"
            alt=""
            id="news"
          />
        </div>
      </div>
      <div className="home-box">
        <div className="js">
          THE CREATIVES OF COHORT 93 ARE EXPERIENCING CREATIVE BLOCK BUT THIS IS
          GREAT NEWS. BECAUSE IT IS THE SOLE PURPOSE OF THE WEBSITE. TO GET BACK
          INTO A CREATIVE FLOW OF SOFTWARE DEVELOPMENT. THIS SITE SERVES AS AN
          EMPTY CANVAS AND ALTHOUGH PERFECTION IS STRIVED FOR, IT IS NOT
          EXPECTED. ENJOY. Something random
        </div>
        <div className="blue-box"></div>
        <div className="purple-box"></div>
        <div className="pink-box"></div>
        <div className="lime-box"></div>
      </div>
    </div>
  );
}

export default Home;
