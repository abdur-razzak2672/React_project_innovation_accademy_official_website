import React from 'react'
import svg1 from './courses/1.svg'
import svg2 from './courses/2.svg'
import svg3 from './courses/3.svg'
import svg4 from './courses/4.svg'
import svg5 from './courses/5.svg'
import image1 from './courses/LEVEL1.png'
import image2 from './courses/LEVEL2.png'
import image3 from './courses/LEVEL3.png'
import image4 from './courses/LEVEL4.png'
import image5 from './courses/LEVEL5.png'

const courses = () => {
    return (
      <section className="text1">
        <div className="courses" id="courses">
          <h2>Bangladesh’s First</h2>
          <h1>Comprihensive curriculum for Kids</h1>
          <div id="carouselExampleIndicators" className="carousel slide text-center" data-ride="carousel">
            <div>
                <div className="carousel-indicators grad ">
            
                    <a href="#courses"> <span className="dot active"  data-target="#carouselExampleIndicators" data-slide-to="0">Grade 1-3</span> </a>
                    <a href="#courses"> <span className="dot "  data-target="#carouselExampleIndicators" data-slide-to="1">Grade 1-3</span> </a>
                    <a href="#courses"> <span className="dot "data-target="#carouselExampleIndicators" data-slide-to="2">Grade 1-3</span> </a>
                
                </div>
            </div>

            <div className="carousel-inner  text-center  image3">
                <div className="container carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <img src = {svg1} alt = ""></img> 
                      <div className="card text-dark"> 
                        <img src = {image1} alt = ""></img>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <img src = {svg2} alt = ""></img> 
                      <div className="card text-dark"> 
                          <img src = {image2} alt = ""></img>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src = {svg3} alt = ""></img> 
                      <div className="card text-dark"> 
                          <img src = {image3} alt = ""></img>        
                      </div>
                    </div>
                  </div>
                </div>


                <div className="container carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <img src = {svg4} alt = ""></img> 
                      <div className="card text-dark"> 
                        <img src = {image4} alt = ""></img>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src = {svg5} alt = ""></img> 
                      <div className="card text-dark"> 
                          <img src = {image5} alt = ""></img>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src = {svg1} alt = ""></img> 
                      <div className="card text-dark"> 
                          <img src = {image1} alt = ""></img>        
                      </div>
                    </div>
                  </div>
                </div>


                <div className="container carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <img src = {svg5} alt = ""></img> 
                      <div className="card text-dark"> 
                        <img src = {image1} alt = ""></img>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src = {svg3} alt = ""></img> 
                      <div className="card text-dark"> 
                          <img src = {image2} alt = ""></img>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src = {svg4} alt = ""></img> 
                      <div className="card text-dark"> 
                        <img src = {image5} alt = ""></img>         
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </section>
    
        
    )
}



export default courses ;