import React from 'react'
import { useState } from "react";
import Dashboard from "../Dashboard/dashboard";
import ListingsDescription from "../../AuctionsManager/Listings/ListingsDescription";
import AddListings from "./newListing/AddListings";
import ListingPhotos from "./newListing/ListingPhotos";
import ListingDocuments from "./newListing/ListingDocuments";
import ListingPreview from "./newListing/ListingPreview";
import RolesDescription from "../../AuctionsManager/Roles/RolesDescription";

const LISTINGS = () => {
  const [openAddListings, setOpenAddListings] = useState("BASIC");

  const [data, setData] = useState()

  return (
    <div>
      <Dashboard>
      <div className="lg:ml-[13px] mt-[145px] w-[1120px] bg-gray-200 pb-0 ">
        {openAddListings === "BASIC" ? (
          <ListingsDescription setData={setData} setOpenAddListings={setOpenAddListings} />
        ) : openAddListings === "PHOTOS" ? (
          <AddListings setData={setData} setOpenAddListings={setOpenAddListings} />
        ) : openAddListings === "UPLOAD" ? (
          <ListingPhotos setData={setData} setOpenAddListings={setOpenAddListings} />
        ) : openAddListings === "DETAILS" ? (
          <ListingDocuments setOpenAddListings={setOpenAddListings} />
        ) : openAddListings === "PREVIEW" ? (
          <ListingPreview setOpenAddListings={setOpenAddListings} />
        ) : (
          <RolesDescription setOpenAddListings={setOpenAddListings} />
        )}
        </div>
      </Dashboard>
    </div>
  );
};
export default LISTINGS;
