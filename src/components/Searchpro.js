import React, { useState } from 'react'
import Header from './Header'

const Searchpro = () => {
    var [proname,setProname]=useState("")

const changeValue=()=>{
    const data=
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
                    <input onChange={(s)=>{setProname(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={} className="btn btn-success">SEARCH</button>
                </div>
            </div>

        </div>
    </div>
</div>
    </div>
  )
}

export default Searchpro