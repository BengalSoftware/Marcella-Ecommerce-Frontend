"use client";
import Link from "next/link";
import React, { useContext } from "react";
import MobileSubNavButton from "./MobileSubNavButton";
import { AuthContext } from "@/context/authProvider/AuthProvider";
import { FiUser } from "react-icons/fi";

const MobileCategories = ({ categories, setOpen }) => {
  const { user, seller, userLoginSuccess, sellerLoginSuccess, handleLogout, handleGoogleLogout } =
    useContext(AuthContext);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <nav>
      <ul>
        {categories?.map((category) =>
          category?.children?.length > 0 ? (
            <MobileSubNavButton key={category?._id} title={category?.title}>
              {category?.children?.map((subCat) =>
                subCat?.children?.length > 0 ? (
                  <MobileSubNavButton key={subCat?._id} title={subCat?.title}>
                    {subCat?.children?.map((subCatChild) => (
                      <li
                        key={subCatChild?._id}
                        className={`border-b border-b-gray-500 hover:text-black border-opacity-10 text-sm py-2`}
                      >
                        <Link
                          href={`/products?category=${subCatChild?.slug}`}
                          className="w-full block"
                          onClick={handleClose}
                        >
                          {subCatChild?.title}
                        </Link>
                      </li>
                    ))}
                  </MobileSubNavButton>
                ) : (
                  <li
                    key={subCat?._id}
                    className="border-b border-b-gray-500 hover:text-black border-opacity-10 text-sm py-2"
                  >
                    <Link
                      href={`/products?category=${subCat?.slug}`}
                      className="w-full block"
                      onClick={handleClose}
                    >
                      {subCat?.title}
                    </Link>
                  </li>
                )
              )}
            </MobileSubNavButton>
          ) : (
            <li
              key={category?._id}
              className="border-b border-b-gray-500 hover:text-black border-opacity-10 py-2 text-sm"
            >
              <Link
                href={`/products?category=${category?.slug}`}
                className="w-full block"
                onClick={handleClose}
              >
                {category?.title}
              </Link>
            </li>
          )
        )}
        {user?.data?.user?.email || userLoginSuccess ? (
          <Link
            href="/account"
            className="flex items-center gap-2 py-2 text-sm"
            onClick={handleClose}
          >
            <FiUser /> Account
          </Link>
        ) : (
          <Link
            href="/login"
            className={
              seller?.data?.user?.email || sellerLoginSuccess
                ? "hidden"
                : "flex items-center gap-2 py-2 text-sm"
            }
            onClick={handleClose}
          >
            <FiUser /> Account
          </Link>
        )}
        {seller?.data?.user?.email || sellerLoginSuccess ? (
          <Link
            href="/seller"
            className="flex items-center gap-2 py-2 text-sm"
            onClick={handleClose}
          >
            <FiUser /> Dashboard
          </Link>
        ) : (
          ""
        )}
        {user?.data?.user?.email ||
        seller?.data?.user?.email ||
        sellerLoginSuccess ||
        userLoginSuccess ? (
          <button
            onClick={() => {
              handleLogout();
              if(user?.success)
              {
                  handleGoogleLogout();
              }
          } }
            className="flex items-center gap-x-2 py-2 text-sm"
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default MobileCategories;
