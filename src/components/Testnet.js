import React from 'react';
import meter1 from "../assets/img/icw.png";
import meter2 from "../assets/img/mun.png";
import meter3 from "../assets/img/lambda.png";
import meter4 from "../assets/img/teritori.png";
import meter5 from "../assets/img/point.png";
import meter6 from "../assets/img/empower.png";
import meter8 from "../assets/img/nulink.png";
import meter9 from "../assets/img/aptos.png";
import meter10 from "../assets/img/defund.png";
import meter11 from "../assets/img/deweb.png";
import meter12 from "../assets/img/celestia.png";
import meter13 from "../assets/img/masa.png";
import meter14 from "../assets/img/paloma.png";
import meter15 from "../assets/img/forta.png";
import meter16 from "../assets/img/sui.png";
import meter17 from "../assets/img/peaq.png";
import meter18 from "../assets/img/juno.png";
import meter19 from "../assets/img/rebus.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> Testnet and Mainnet Guide✨</h2>
                        <p>Here's the simple guide from various mainnets and testnets! </p>
                        <a class="github-button" href="https://github.com/elangrr/testnet_guide"  target="_blank" data-icon="octicon-star" data-size="large" data-show-count="true">Github Stars ⭐</a>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/lambda" target="_blank">  <img src={meter3} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/lambda" target="_blank">  <h5>Lambda Mainnet</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/icw" target="_blank"> <img src={meter1} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/icw" target="_blank">  <h5>ICW Chain Mainnet</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/mun" target="_blank"> <img src={meter2} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/mun" target="_blank"> <h5>MUN</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/nulink" target="_blank"> <img src={meter8} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/nulink" target="_blank"> <h5>Nulink</h5></a>
                            </div>
                            {/* <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/quicksilver" target="_blank"> <img src={meter7} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/quicksilve" target="_blank"> <h5>Quicksilver</h5></a>
                            </div> */}
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/empower" target="_blank"><img src={meter6} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/empower" target="_blank"> <h5>Empower</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/point" target="_blank"> <img src={meter5} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_guide/tree/main/point" target="_blank"> <h5>Point Mainnet</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/teritori" target="_blank"> <img src={meter4} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/teritori" target="_blank"> <h5>Teritori</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/aptos" target="_blank"><img src={meter9} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/aptos" target="_blank"> <h5>Aptos</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/defund" target="_blank"><img src={meter10} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/defund" target="_blank"><h5>Defund</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/deweb" target="_blank"><img src={meter11} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/deweb" target="_blank"> <h5>Deweb</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/celestia" target="_blank"><img src={meter12} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/celestia" target="_blank"> <h5>Celestia</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/masa" target="_blank"><img src={meter13} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/masa" target="_blank"> <h5>Masa</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/paloma" target="_blank"> <img src={meter14} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/paloma" target="_blank"> <h5>Paloma</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/forta" target="_blank"> <img src={meter15} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/forta" target="_blank"> <h5>Forta</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/peaq" target="_blank"><img src={meter17} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/peaq" target="_blank"><h5>Peaq</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/juno" target="_blank"><img src={meter18} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/juno" target="_blank"><h5>Juno</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/rebus" target="_blank"><img src={meter19} alt="Image" /></a>
                            <a href="https://github.com/elangrr/testnet_manuals/tree/main/rebus" target="_blank"><h5>Rebus</h5></a>
                                </div>
                                <div className="item">
                                <a href="https://github.com/elangrr/testnet_manuals/tree/main/sui" target="_blank"><img src={meter16} alt="Image" /></a>
                                <a href="https://github.com/elangrr/testnet_manuals/tree/main/sui" target="_blank"><h5>Sui Network</h5></a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}
