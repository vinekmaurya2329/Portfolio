import React from 'react';
import '../CSS/Github.css'

function Github() {
  return (
    <>
<div className='github-main'>
<h2 style={{textAlign:'center',marginTop:'20px',color:'white'}}>Github</h2> <p style={{textAlign:'center',marginTop:'-15px',fontSize:'12px',color:'white'}}>Live Dashboard</p> <hr />

    <div className='container-5'>



      <div className="container-5-child state">
        <img src="https://camo.githubusercontent.com/bd94ce42dc16275ba99317f8b9fa3a84a53810588b75d5be994c30b9172baa38/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d76696e656b6d6175727961323332392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="" />
      </div>

      <div className="container-5-child state">

        <img src="https://camo.githubusercontent.com/1b80f27ca72d1e2d4b4ba248ad2c4d43ff78a198a62f407ed10d911152b1e102/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d76696e656b6d6175727961323332392673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" />
      </div>

      <div className="container-5-child lang-state">
        <img src="https://camo.githubusercontent.com/69efb1d82602354222243194ba8729a9cf972bd5e4d84be7836ebfd92ca8e088/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d76696e656b6d61757279613233323926" alt="" />
      </div>


    </div>
    </div>
    </>
  )
}

export default Github