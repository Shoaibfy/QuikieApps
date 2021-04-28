import React, { useState, useEffect } from 'react'
import Amezon from './AmazonDetails';
import FacebookDetails from './FacebookDetails';
import GoogleDetails from './GoogleDeatils';
import data1 from './data'
import { useParams } from 'react-router-dom'

const View = () => {
    const param = useParams()
    const [title, setTitle] = useState('shoaib')

    useEffect(() => {
        console.log("params:", param)
    }, [])

    return (
        <div>
            {/* <div style={{ display: 'flex', justifyContent: 'space-around', color: 'blue', margin: '20px auto' }} >
                <h5 onClick={() => setTitle('amezon')} > Amazon</h5>
                <h5 onClick={() => setTitle('fb')} > FaceBook</h5>
                <h5 onClick={() => setTitle('')} > Google</h5>
            </div > */}
            {/* <div style={{ display: 'flex', flexDirection: 'row' }} >
                {title === 'amezon' ? <Amezon /> :
                    title === 'fb' ? <FacebookDetails /> :
                        < GoogleDetails />}

            </div> */}
            {title}
        </div >
    )
}

export default View
