import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from 'dotenv';
import Items from "../components/Items";
import Sidebar from "../components/Sidebar";

import { Mosaic } from "react-loading-indicators";

function Home() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItems = async () => {
        setLoading(true);
        const response = await axios.get("/item");
        setLoading(false);
        console.log(response);
        setItems(response.data.payload);
    }   

    useEffect(() => {
        getItems();
    }, []);

    if (loading)
        return (
            <div className="flex min-h-full mt-52 h-screen justify-center align-middle">
                <Mosaic color="#FDC700" />
            </div>
        )

    return (
        <div>
            <Sidebar />
            <Items 
                data={items}
            />
        </div>
    )
}

export default Home;