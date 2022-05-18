import React, { useState } from 'react'
import Header from './Header'

const Proadd = () => {

var [name,setName]=useState("")
var [price,setPrice]=useState("")
var [desc,setDesc]=useState("")

const changePro=()=>{
    const details={"name":name,"price":price,"description":desc}
    console.log(details)
}


  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label for="" className="form-label">Product Name</label>
<input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
</div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Price</label>
        <input onChange={(a)=>{setPrice(a.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Description</label>
        <input onChange={(a)=>{setDesc(a.target.value)}} type="text" className="form-control"/>
    </div>
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button onClick={changePro} className="btn btn-success">SUBMIT</button>
    </div>
</div>

        </div>
    </div>
</div>  
      
    </div>
  )
}

export default Proadd