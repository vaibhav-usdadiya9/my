import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProdectDetails() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(respose => respose.json())
            .then(result => setData(result))
    }, [])
    return (
        <div className='container-fluid mt-5 '>
            <div className='d-flex justify-content-center p-5' style={{ border: '1px solid gray', borderRadius: '8px' }}>
                <img src={data?.image} width='200px' />
                <div className='ms-5'>
                    <p className='fs-5'><strong className='fs-4'>Title :- </strong>{data?.title}</p>
                    <p className='fs-5'><strong  className='fs-4'>Description :- </strong>{data?.description}</p>
                    <p className='fs-5'><strong className='fs-4'>Category :- </strong>{data?.category}</p>
                    <p className='fs-5'><strong className='fs-4'>Price :- </strong>{data?.price}$</p>
                </div>
            </div>
        </div>
    )
}
