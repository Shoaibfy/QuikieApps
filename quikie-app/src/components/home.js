import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';
import data1 from './data'
import Navbar from './Navbar';




const Home = () => {

    const [text, setText] = useState('')
    const [companyDetails, setCompanyDetails] = useState([])

    const [data, setData] = useState(data1)



    useEffect(() => {
        fetchingData()
    })

    const fetchingData = () => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => setData(data))

    }

    const addCompanyDetails = (id, company, stockSymbol) => {

        setCompanyDetails(companyDetails.concat({ id, company, stockSymbol }))


    }

    return (
        <div className="App">
            <Navbar />
            <input type='text' placeholder='Enter your company name...' className='m-5' value={text} onChange={(e) => setText(e.target.value)} />

            < Table responsive="sm">

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
                    {data.filter((val) => {

                        if (text === "") {
                            return val
                        } else if (val.company.toLowerCase().includes(text.toLowerCase())) {
                            return val
                        }
                    }).map((item, id) =>
                        <tr key={id}>
                            <td>  {item.id} </td>
                            <td>{item.company}</td>
                            <td>{item.stockSymbol}</td>
                            <td>{item.id}</td>
                            <td>$ 49.78</td>
                            <td > <Link to={`/view/:${item.id}`}> <Button variant="primary" onClick={() => addCompanyDetails(item.id, item.company, item.stockSymbol)} >View</Button>{' '}</Link> </td>

                        </tr>)}

                </tbody>
            </Table>
            {companyDetails.map(item => {
                return (
                    <p> {item.company} </p>
                )
            })}

        </div >
    );
}

export default Home;
