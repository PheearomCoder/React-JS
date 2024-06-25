import React, { useEffect, useState } from "react";
import LoadingView from "../components/LoadingView";
import Card from './../components/Card';
import { fetchProducts } from "../services/productAction";

export default function Home() {
  // Declare Variable
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState([true]);

  useEffect(() => {
    // Call to API
    console.log("Home Page Started")
    fetchProducts()
    .then(resp =>{
      setLoading(false)
      setProducts(resp)
    })
  }, []);
  return (
    <>
      <main className="container">
        <h1>Product</h1>
        <div className="row g-4">
          
          {isLoading ? 
            <>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <LoadingView />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <LoadingView />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <LoadingView />
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <LoadingView />
              </div>
            </> 
            :
            products.map((p) => (
              <div
                key={p.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Card
                      imageURL={p.images[0]} 
                      title   ={p.title} 
                      price = {p.price}
                />
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
};
