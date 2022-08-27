import React, { useState, useEffect} from 'react'
import axios from "axios";
import _ from "lodash"

const Orders = () => {

    const [orders, setOrders] = useState();
    const pageSize = 10;
    const [paginated, setPaginated]= useState()
    const [currPage, setCurrPage] = useState(1)

    useEffect(() =>{
       axios.get("https://assessment.api.vweb.app/orders").then((res)=>  {
        console.log(res.data);
        setOrders(res.data)
        setPaginated(_(res.data).slice(0).take(pageSize).value())
       })
    }, [])   
console.log(paginated)

const pagination = (pageNo) => {
    setCurrPage(pageNo);
    const startIndex = (pageNo-1) * pageSize;
    const paginatedPost = _(orders).slice(startIndex).take(pageSize).value();
    setPaginated(paginatedPost)
}
   

const pageCount = orders? Math.ceil(orders.length/pageSize) : 0;
if(pageCount==1) {
    return null;
}
const pages = _.range(1, pageCount+1)
  return (
   <div>
     <h2 style={{textAlign:"center"}}>Lists of Orders</h2>
    {
        !paginated ? ("No Data Found") : (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Quantity</th>
                        <th>User Id</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginated.map((item, index)=> {
                        return <tr key={index}>
                            <td>{item.order_id}</td>
                            <td>{item.product_id}</td>
                            <td>{item.quantity}</td>
                            <td>{item.user_id}</td>
                            <td>{item.order_date}</td>
                         </tr>
                        })
                    }
                </tbody>
            </table>
        )
    }
    <nav className='d-flex justify-content-center'>
        <ul className='pagination'>
          {
            pages.map((page)=> {
                return <li className={
                    page === currPage? "page-item active" : "page-item"
                }>
                    <p className='page-link'
                    onClick={()=>pagination(page)}>{page}</p>
                </li>
            })
          }
        </ul>
    </nav>
   </div>
  )
}

export default Orders