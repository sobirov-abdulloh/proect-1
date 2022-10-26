import React from "react";
import "./Task.css"
import { useProductsQuery } from "../../redux/ProductApi";
import Product from "../product/Product";
function Task() {
  const { data,  isLoading, isSuccess } = useProductsQuery();
  // console.log(data);
  return (
    <div className="task">
      {isLoading && <h2>Loading...</h2>}
      {isSuccess && data.map((item) => <Product key={item.id} {...item} />)}
    </div>
  );
}

export default Task;
