'use client'
import { getFlashSaleOffer } from '@/lib/flashSale/flashSaleApi';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const FlashSaleOfferTable = () => {
    const [flashSale, setFlashSale] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFlashSaleOffer();
                if (data) {
                    setFlashSale(data)
                }
            } catch (error) {
                console.error(error)
            }
        };
        fetchData()
    }, [])


    let time = "";
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
        } else {
            return (time = (
                <span
                    style={{
                        backgroundColor: "#251B37",
                        color: "#38E54D",
                        letterSpacing: "1px",
                        fontFamily: "digital-clock-font",
                        fontWeight: "700",
                    }}
                    className=" p-1 rounded"
                >
                    {days}:{hours}:{minutes}:{seconds}
                </span>
            ));
        }
    };

    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <h1 className='p-4'>All Offer</h1>
            <table className="table-auto min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2 text-sm text-center">SL</th>
                        <th className="border p-2 text-sm text-center">Name</th>
                        <th className="border p-2 text-sm text-center">Color</th>
                        <th className="border p-2 text-sm text-center">Timer</th>
                        <th className="border p-2 text-sm text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flashSale?.result?.length > 0 ?
                            flashSale?.result?.map((offer, idx) =>
                                <tr key={idx}>
                                    <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{idx + 1}</p></td>
                                    <td className="border p-2 text-sm text-center"><p className='line-clamp-1'>{offer?.name}</p></td>
                                    <td className="border p-2 text-sm text-center text-dark" style={{ backgroundColor: offer?.color }}><p className='line-clamp-1'>{offer?.color}</p></td>
                                    <td className="border p-2 text-sm text-center" >
                                        <p className='line-clamp-1'>
                                            {offer?.timeStamps && offer?.status === "active" ? (
                                                <Countdown date={offer?.timeStamps} renderer={renderer}>
                                                    {time}
                                                </Countdown>
                                            ) : (
                                                ""
                                            )}
                                        </p></td>
                                    <td className={`border p-2 text-xs text-center text-white ${offer?.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>{offer?.status}</td>
                                </tr>
                            )
                            : <tr>
                                <td colSpan={8} className="border p-2 text-xs text-center py-10"><p>No Offer Found</p></td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FlashSaleOfferTable;