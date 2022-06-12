import React from "react";

function Home() {
  return (
    <>
    <h1 className="mainHeading"> Coffee my first love</h1>
   
    <section id="boxes">
        <div className="boxContainer">
          <div className="box">
            <img src="images/1.jpg" alt={"images/4.jpg"}  width="200" height="200"/>
            <h3>Arabica</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
          <div className="box">
            <img src="images/2.jpg" alt={"images/4.jpg"}  width="200" height="200"/>
            <h3>Robusta</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
          <div className="box">
            <img src="images/3.jpg" alt={"images/4.jpg"}  width="200" height="200"/>
            <h3>Cappuccino</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
