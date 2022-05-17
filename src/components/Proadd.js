import React from 'react'
import Header from './Header'

const Proadd = () => {
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label for="" className="form-label">Product Name</label>
<input type="text" className="form-control"/>
</div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Price</label>
        <input type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Description</label>
        <input type="text" className="form-control"/>
    </div>
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-success">SUBMIT</button>
    </div>
</div>

        </div>
    </div>
</div>  
      
    </div>
  )
}

export default Proadd