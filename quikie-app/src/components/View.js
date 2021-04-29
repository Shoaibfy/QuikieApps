import React, { useState, useEffect } from 'react'
import Amezon from './AmazonDetails';
import FacebookDetails from './FacebookDetails';
import GoogleDetails from './GoogleDeatils';
import data1 from './data'
import { useParams } from 'react-router-dom'

const View = () => {
    const param = useParams()
    const [title, setTitle] = useState('shoaib')
    const [companyData, setCompanyData] = useState({})

    useEffect(() => {
        console.log(param)
        const data = data1.reduce((acc, val) => {
            if(val.id == param.id){
                acc = val
            }
            return acc
        },{})
        setCompanyData(data)
        console.log(data)
    }, [])

    return (
        <div>
        {companyData !== undefined ?
            <div style={{ display: 'flex', flexDirection: 'row' }} >
                {companyData.company}
            </div>
            :
            <div>Loading ...</div>
        }
        </div>
    )
}

export default View
