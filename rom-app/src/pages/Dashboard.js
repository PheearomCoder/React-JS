import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productAction';


 export default function Dashboard() {
    const [products, setProducts] = useState([])
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Photo',
            selector: row => <img src={row.images[0]} alt="product" style={{width:70}}/>
        },
        {
            name: 'Action',
            selector: row => <button>Edit</button>,
           
        },
        
    ]
    
    
    useEffect(() => {
        fetchProducts()
        .then(resp => setProducts(resp))
    }, [])
  return (
    <main className='container'>
        <DataTable value={products} tableStyle={{ minWidth: '10rem' }}
            columns={columns}
            data={products}
            pagination
        />
    </main>
  )
}
