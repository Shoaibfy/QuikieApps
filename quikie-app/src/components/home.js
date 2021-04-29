import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';
import Pagination from './Pagination'
import data1 from './data'
import Navbar from './Navbar';




const Home = () => {

    const [text, setText] = useState('')
    const [companyDetails, setCompanyDetails] = useState([])

    const [data, setData] = useState(data1)
    const [workingData, setWorkingData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [noOfElementPerPage, setNoOfElementPerPage] = useState(1)



    useEffect(() => {
        // fetchingData()
        setWorkingData(data.slice(currentIndex, noOfElementPerPage))
    }, [])

    const fetchingData = () => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => setData(data))

    }


    const handleSearch = (e) => {
        const array = workingData.filter((val) => {
            if (e.target.value === "") {
                return val
            } else if (val.company.toLowerCase().includes(e.target.value.toLowerCase())) {
                return val
            }
        })
        setWorkingData(data)
    }
    const paginate = (page) => {
        setWorkingData(data1.slice(noOfElementPerPage * (page - 1), noOfElementPerPage * page))
    }

    return (
        <div className="App">
            <Navbar />
            <input type='text' style={{ width: '600px' }} placeholder='Enter company name...' className='m-5' value={text} onChange={(e) => handleSearch(e)} />

            <Table responsive="sm">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Stock Symbol</th>
                        <th>Market Cap</th>
                        <th>Current Price</th>
                        <th> Buttons </th>

                    </tr>
                </thead>

                <tbody>
                    {workingData.map((item, id) =>
                        <tr key={id}>
                            <td>  {item.id} </td>
                            <td>{item.company}</td>
                            <td>{item.stockSymbol}</td>
                            <td>{item.id}</td>
                            <td>$ 49.78</td>
                            <td > <Link to={`/view/${item.id}`}> <Button variant="primary" >View</Button></Link> </td>

                        </tr>)}

                </tbody>
            </Table>
            <Pagination paginate={paginate} elementPerPage={noOfElementPerPage} totalTableElement={data1.length} />
        </div>
    );
}

export default Home;
