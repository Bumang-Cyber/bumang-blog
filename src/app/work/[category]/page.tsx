"use client";

import { useParams } from "next/navigation";

const Category = () => {
  const params = useParams()["category"];

  return <div className="flex-1 bg-red">{params}</div>;
};

export default Category;
