import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shop = (props) => {
    const { productList, setProductList } = props;
    console.log("Is Array?: ", Array.isArray(productList));

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log("Something went wrong: ", err);
            });
    }, []);

    const deleteHandler = (productFromMap) => {
        axios
            .delete(`http://localhost:8000/api/products/${productFromMap}`)
            .then((res) => {
                console.log("Deleted: ", res.data)
                setProductList(
                    productList.filter((otherProducts) => otherProducts._id !== productFromMap)
                );
            })
            .catch((err) => {
                console.log("Something went wrong: ", err);
            });
    };

    return (
        <div className="flex flex-wrap items-center justify-evenly my-3">
            {productList.map((product, idx) => (
                <div className="w-96 h-48 bg-stone-700 text-lg text-amber-400 m-1 rounded p-5" key={idx}>
                    <h5 className="font-bold text-white underline">{product.title}</h5>
                    <p className="">Price: {product.price}</p>
                    <p className="break-normal">Description: {product.description}</p>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-400 text-white hover:bg-blue-700 shadow-sm cursor-pointer font-bold py-1 px-2 my-4 rounded focus:outline-none focus:shadow-outline">
                            <Link className="text-stone" to={`/display/${product._id}`}>
                                {product.title}
                            </Link>
                        </button>
                        <div className="flex justify-center gap-1 items-center w-1/2">
                            <button className="bg-green-600 text-white hover:bg-green-800 shadow-sm cursor-pointer font-bold py-1 px-2 my-4 rounded focus:outline-none focus:shadow-outline" onClick={() => navigate(`/edit/${product._id}`)}>Edit</button>
                            <button className="bg-red-700 text-white hover:bg-red-900 shadow-sm cursor-pointer font-bold py-1 px-2 my-4 rounded focus:outline-none focus:shadow-outline" onClick={() => deleteHandler(product._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
