import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ProductForm = (props) => {

    const { productList, setProductList } = props

    const navigate = useNavigate()

    const [products, setProducts] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const changeHandler = (e) => {
        setProducts({ ...products, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8000/api/products', products)
            .then((res) => {
                console.log(res.data)
                setProductList([...productList, res.data])
                setProducts({
                    title: "",
                    price: 0,
                    description: ""
                })
                navigate('/display')
            })
            .catch((err) => {
                console.log('Something went wrong: ', err)
            })
    }

    return (
        <form onSubmit={submitHandler} className="bg-stone-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
            <h4 className="text-amber-400 text-center font-bold text-lg">Add a product to the shop!</h4>
            <div className="mb-4">
                <label className="block text-amber-300 text-sm font-bold mb-2" htmlFor="title">Title</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" onChange={changeHandler} />
            </div>
            <div className="mb-4">
                <label className="block text-amber-300 text-sm font-bold mb-2" htmlFor="price">Price</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" onChange={changeHandler} />
            </div>
            <div className="mb-4">
                <label className="block text-amber-300 text-sm font-bold mb-2" htmlFor="description">Description</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="description" onChange={changeHandler} />
            </div>
            <input type="submit" value="Add to Shop" className="bg-amber-400 text-stone-700 hover:bg-amber-500 cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
        </form>
    )

}

export default ProductForm