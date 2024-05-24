import { useEffect, useState } from "react";
import axios from 'axios'

export default function Category(){
    const[categories, setCategories]=useState([])

    const getCategory=async()=>{
        try {
          const response=await axios.get('/api/v1/category/all-category')
          if(response){
            setCategories(response?.data.data)

          }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        getCategory()
    },[])
    return categories;
}