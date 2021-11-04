import React from 'react'

const footer = () => {
    return (
        <section >
            <footer className="foot" id="contact">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-lg-4 text-center text-white">
                            <h6>Contact Us : 01734360072</h6>
                            <h6>Email : razzak172758@gmail.com</h6>
                        </div>
                        <div className = "col-lg-4 text-center text-white">
                            <a href="#courses" className="fa fa-facebook"></a>
                            <a href="#courses" className="fa fa-youtube"></a>
                           
                        </div>
                        <div className = "col-lg-4 text-center text-white">
                            <h4>Loading</h4>
                        </div>
                    </div>
                </div>       
            </footer>         
        </section>
    )
}

export default footer ;
