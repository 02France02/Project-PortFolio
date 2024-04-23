import React from "react";
import useFetchFilms from "../Components/useFetchFilms";
import { Link } from "react-router-dom";

function Jewelery() {
  const { data } = useFetchFilms();
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            YOUR PRODUCTS
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              product.category === "jewelery" ? (
                <div key={product.id} className="bg-white rounded-lg shadow-lg">
                  <div className="relative h-64 aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <Link
                      to={product.href}
                      className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                    >
                      {product.title}
                    </Link>
                    <p className="mt-2 text-gray-600 truncate">
                      {product.category}
                    </p>
                    <p className="mt-2 text-lg leading-tight font-semibold text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jewelery;
