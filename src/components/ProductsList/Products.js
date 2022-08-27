import React, { useEffect, useState} from 'react';


const Products = () => {

const [products, setProducts] = useState([]);    

const getProducts = async () => {
     const response = await fetch('https://assessment.api.vweb.app/products')
     console.log(response)
     setProducts(await response.json());
}    

useEffect(() =>{
   getProducts();
}, [])

  return (
    <>
     <h2 style={{textAlign:"center"}}>Lists of Products</h2>
     <div className='container-fluid mt-5'>
        <div className='row text-center'>
            {
                products.map((item) => {
                   return (
                    <>
            <div className="col-10 col-md-4 mt-5" key={item.product_id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src="" className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{item.name}</h4>
                                          
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Id</span> <span className="number1">{item.product_id}</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Stock</span> <span className="number2">{item.stock}</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating"></span>Selling Price<span className="number3">{item.selling_price}</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                    </>
                   )
                })
            }
            
        </div>
     </div>
    </>
  )
}

export default Products