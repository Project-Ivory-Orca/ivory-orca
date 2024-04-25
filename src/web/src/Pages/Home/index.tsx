import Layout from "../../Components/Layout";
import axios from "axios";


import { useEffect, useState } from "react";
import { Product } from "../../../Models/Product";

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>("http://localhost:5001/api/catalog", {
            headers: {
                "Content-Type": "application/json"
            },
        
        })
        .then((response) => setProducts(response.data))
        .catch((error) => console.error(error));
    }, []);
    return (
        <Layout>
            <h1>Home</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </Layout>
    );
};

export default Home;