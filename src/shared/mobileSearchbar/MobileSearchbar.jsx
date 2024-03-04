import { productSearchSuggestion } from '@/lib/productApi/productApi';
import { Drawer } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosSearch } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';

const MobileSearchbar = ({ openDrawer, setOpenDrawer }) => {
    const [suggestSearch, setSuggestSearch] = useState(null);
    const [searchData, setSearchData] = useState(null)
    const router = useRouter()


    const handleSearch = (e) => {
        e.preventDefault();
        if (suggestSearch === '') {
            router.push('/');
        } else {
            router.push(`/products?search=${suggestSearch}`);
        }
    }

    useEffect(() => {
        const searchMutation = async () => {
            try {
                const data = await productSearchSuggestion(suggestSearch);
                if (data) {
                    setSearchData(data?.tags)
                }
            } catch (error) {
                console.error(error)
            }

        }
        searchMutation();

        if (!openDrawer) {
            setSuggestSearch('bananr')
        }
    }, [suggestSearch])


    return (
        <div className='w-full'>
            <button onClick={() => setOpenDrawer(true)} className='bg-white flex items-center justify-between w-full rounded-full gap-8 text-xs text-gray-400 font-medium py-2 px-4'>
                Search for products
                <IoIosSearch className='text-xl' />
            </button>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                title={null}
                closeIcon={null}
                styles={{
                    body: { padding: '0px' }
                }}
            >
                <div className='bg-primary p-3 flex'>
                    <button onClick={() => setOpenDrawer(false)} className='w-[10%]'>
                        <IoIosArrowBack className='text-2xl text-white' />
                    </button>
                    <form onSubmit={handleSearch} className='w-[90%]'>
                        <div onClick={() => setOpenDrawer(true)} className=' flex items-center rounded-md bg-white'>
                            <input autoFocus={true} onChange={(e) => setSuggestSearch(e.target.value)} className='rounded-md outline-none w-full p-2 placeholder:text-sm' placeholder='Search your product' type="text" />
                            <IoIosSearch className='text-2xl mx-2' />
                        </div>
                    </form>
                </div>

                <ul>
                    {
                        searchData?.length > 0 ?
                            searchData?.map((tag, idx) =>
                                <li onClick={() => setOpenDrawer(false)} key={idx} className='border-b border-gray-50 '>
                                    <Link href={`/products?search=${tag}`} className='w-full flex items-center justify-between py-2 px-4'>
                                        {tag}
                                        <MdOutlineArrowOutward />
                                    </Link>

                                </li>

                            ) :
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-center mt-5 text-dark'>No Search Result Found</p>
                                <div className='flex items-center justify-center h-96'>
                                    {/* <Image className='w-52' src={searchImg} placeholder='blur' quality={100} /> */}
                                </div>
                            </div>
                    }

                </ul>
            </Drawer>
        </div>
    );
};

export default MobileSearchbar;