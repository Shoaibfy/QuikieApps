import React from 'react'
import './Pagination.css'

const Pagination = ({totalTableElement, elementPerPage, paginate}) => {
    let pages = []
    for(let i = 1; i <= Math.ceil(totalTableElement/elementPerPage); i++){
        pages.push(i)
    }
    const makePageNo = (page) => {
        return (
            <div onClick = {() => paginate(page)} className='pageNo'>{page}</div>
        )
    }
    return (
        <div className='pagination'>
            {pages.map(makePageNo)}
        </div>
    )
}


export default Pagination
