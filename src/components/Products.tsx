import React,{useEffect,useState} from 'react';
import * as api from '../APIFile'
interface Product{
    name: string,
    categories: string[],
    image: string,
    price: string,
    description: string
}
interface ProductsProps{
}

interface setProducts{
    
}

    // interface ProductsState{
//     product: {name: string,
// categories: string[],
// image: string,
// price: string,
// description: string}
// }
const Products : React.FC<ProductsProps> =() => {
    const[products,setProducts] = useState()
    useEffect(() => {
        api.getProducts().then(setProducts(res))
    }, [])
    return (
        <div><ul>
            {products.map((product)=>{
                <li>{product}</li>
            })}
            </ul>
        </div>
    );
};

export default Products;