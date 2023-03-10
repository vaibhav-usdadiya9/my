import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    const [data, setData] = useState([]);
    const myNav = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(respose => respose.json())
            .then(result => setData(result))
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center' >
                {
                    data.map((value, index) => {
                        return (
                            <div key={index}
                                onClick={() => {
                                    myNav(`/productdetails/${value.id}`)
                                }}
                                className='col-3 m-3 d-flex flex-column p-3 align-items-center'
                                style={{ border: '1px solid gray', borderRadius: '8px' }}>
                                <img src={value.image} width='200px' />
                                <p><span className='fs-4'>Title :- </span>{value.title}</p>
                                <p><span className='fs-4'>Description :- </span>{value.description}</p>
                                <p><span className='fs-4'>Category :- </span>{value.category}</p>
                                <p><span className='fs-4'>Price :- </span>{value.price}$</p>
                                <button type='button' className='btn btn-secondary'
                                    onClick={() => {
                                        myNav(`/productdetails/${value.id}`)
                                    }}
                                >View</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
