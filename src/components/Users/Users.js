import React, { useState, useEffect} from 'react'
import axios from "axios";
import _ from "lodash"


const Users = () => {

    const [users, setUsers] = useState();
    const pageSize = 10;
    const [paginated, setPaginated]= useState()
    const [currPage, setCurrPage] = useState(1)

    useEffect(() => {
        axios.get("https://assessment.api.vweb.app/users").then((res)=>  {
        console.log(res.data);
        setUsers(res.data)
        setPaginated(_(res.data).slice(0).take(pageSize).value())
    })
    }, [])


    const pagination = (pageNo) => {
        setCurrPage(pageNo);
        const startIndex = (pageNo-1) * pageSize;
        const paginatedPost = _(users).slice(startIndex).take(pageSize).value();
        setPaginated(paginatedPost)
    }
       

    const pageCount = users? Math.ceil(users.length/pageSize) : 0;
    if(pageCount==1) {
        return null;
    }
    const pages = _.range(1, pageCount+1)

  return (
   
    <div>
         <h2 style={{textAlign:"center"}}>Lists of Users</h2>
    {
        !paginated ? ("No Data Found") : (
            <table className='table'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginated.map((item, index)=> {
                        return <tr key={index}>
                            <td>{item.user_id}</td>
                            <td>{item.name}</td>
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

export default Users