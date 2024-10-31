"use client";
import { AuthContext } from "@/context/authProvider/AuthProvider";
import { StateContext } from "@/context/stateProvider/StateProvider";
import { getSellerProduct } from "@/lib/productApi/productApi";
import { getSingleSeller, deleteProduct } from "@/lib/sellerApi/sellerApi";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

const ProductTable = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const { sellerPSuccess, setSellerPSuccess } = useContext(StateContext);
  const [singleSeller, setSingleSeller] = useState({}); // Initialize as an empty object
  const { seller } = useContext(AuthContext);
  const router = useRouter();

  // Fetch products when singleSeller is set
  useEffect(() => {
    const fetchData = async () => {
      if (singleSeller?._id) {
        try {
          const data = await getSellerProduct(singleSeller._id);
          if (data) {
            setProducts(data.result.data); // Set the result data directly
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };
    fetchData();
  }, [singleSeller]);

  // fetch single seller
  // Fetch single seller by seller email
  useEffect(() => {
    const fetchData = async () => {
      if (seller?.data?.user?.email) {
        try {
          const res = await getSingleSeller(seller?.data?.user?.email);
          if (res?.data) {
            setSingleSeller(res.data); // Set singleSeller directly to the response data
          }
        } catch (error) {
          console.error("Error fetching seller:", error);
        }
      }
    };
    fetchData();
  }, [seller?.data?.user?.email]);

  // Handle delete product
  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const res = await deleteProduct(id);
        if (res) {
          toast.success("Product Deleted!");
          setProducts(products.filter((product) => product._id !== id));
          router.refresh(); // Refresh current route after product deletion
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg">
      <h1 className="p-4">All Products</h1>
      <table className="table-auto min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-sm text-center">ID</th>
            <th className="border px-4 py-2 text-sm text-center">Name</th>
            <th className="border px-4 py-2 text-sm text-center">Status</th>
            <th className="border px-4 py-2 text-sm text-center">Qty</th>
            <th className="border px-4 py-2 text-sm text-center">Price</th>
            <th className="border px-4 py-2 text-sm text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <tr key={product?._id}>
                <td className="border px-4 py-2 text-sm text-center">
                  {idx + 1}
                </td>
                <td className="border px-4 py-2 text-sm text-center">
                  <p className="line-clamp-1">{product?.name}</p>
                </td>
                <td className="border px-4 py-2 text-sm text-center">
                  {product?.status}
                </td>
                <td className="border px-4 py-2 text-sm text-center">
                  {product?.quantity}
                </td>
                <td className="border px-4 py-2 text-sm text-center">
                  {product?.offerPrice ? product?.offerPrice : product?.price}
                </td>
                <td className="border px-4 py-2 text-sm text-center">
                  <div className="flex items-center justify-center">
                    <Link
                      href={`/seller/edit-product/${product?._id}`}
                      className="rounded-l bg-blue-500 hover:bg-blue-600 text-white text-xl p-1"
                    >
                      <BiSolidPencil />
                    </Link>
                    <Link
                      href={`/product/${product?.slug}`}
                      target="_blank"
                      className="bg-green-500 hover:bg-green-600 text-white text-xl p-1"
                    >
                      <IoEye />
                    </Link>
                    <button
                      className="rounded-r bg-red-500 hover:bg-red-600 text-white text-xl p-1"
                      onClick={() => handleDeleteProduct(product?._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="border py-10 p-2 text-xs text-center">
                <p>No product Found</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
