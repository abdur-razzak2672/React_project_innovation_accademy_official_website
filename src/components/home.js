import React from 'react'
import image1 from './images/kid.png'

const home = () => {
    return (
      <section>
        <div className="home " id = "home">
          <div className="row design">
            <div className="col-lg-6 text">
              <p>Prepare your child<br></br> with the power of</p>
              <h3>Coding & Mathemetical  Thinking</h3>
                    
            </div>
            <div className="col-lg-6 image">
              <img src = {image1} alt = ""></img>         
            </div>
          </div>
        </div>
      </section>


    )
}

export default home; 