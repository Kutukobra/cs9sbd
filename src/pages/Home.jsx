import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from 'dotenv';
import Items from "../components/Items";
import Sidebar from "../components/Sidebar";

function Home() {

    const [items, setItems] = useState([]);

    const getItems = async () => {
        const response = await axios.get("/item");
        console.log(response);
        setItems(response.data.payload);
    }   

    useEffect(() => {
        getItems();
    }, []);

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