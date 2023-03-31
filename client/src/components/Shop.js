import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shop = (props) => {

    const { productList, setProductList } = props

    console.log(Array.isArray(productList))



    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])


    return (
        <div className='flex flex-wrap items-center justify-evenly my-3'>
            {productList.map((product, idx) => (
                <div className='w-96 h-48 bg-stone-700 text-lg text-amber-400 m-1 rounded p-5' key={idx}>
                    <h5 className='font-bold text-white underline'>{product.title}</h5>
                    <p className=''>Price: {product.price}</p>
                    <p className='break-normal'>Description: {product.description}</p>
                    <button className='bg-blue-400 text-white hover:bg-amber-500 cursor-pointer font-bold py-1 px-2 my-4 rounded focus:outline-none focus:shadow-outline'>
                        <Link className='text-stone' to={`/display/${product._id}`}>{product.title}</Link>
                    </button>
                </div>
            ))}
        </div>
    )

}

export default Shop