import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShopOne = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])


    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])


    return (
        <div className='w-100 text-center font-bold h-48 bg-stone-700 text-amber-400 m-1 rounded p-5 shadow'>
            <h5 className='font-bold text-white underline mb-3 text-4xl'>{product.title}</h5>
            <p className='text-2xl'>Price: {product.price}</p>
            <p className='text-2xl'>Description: {product.description}</p>
        </div>
    )

}

export default ShopOne