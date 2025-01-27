import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/constants';
import { TError } from '../../components/subFeatureComponents/Toastify';

function VendorDetails() {

    let [tabIndex, setTabIndex] = useState(1)
    const { id } = useParams();
    const baseURL = BASE_URL
    const token = localStorage.getItem("access")
    let [vendorData, setVendorData] = useState([])
        
        console.log("From venueeew types", vendorData.images);
        async function fetchVendorData(url) {
        try {
            await axios.get(url, {
                headers: {
                    authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    console.log(res);
                    setVendorData(res.data)
                    console.log("From venueeew types", res.data);
                });
        } catch (error) {
            TError("Data fetching failed !!")
            // console.log("the error is  :", error);
        }
    };




    useEffect(() => {
        fetchVendorData(baseURL + `event/vendor-detail/${id}`);
    }, [])

    return (
        <div className=" w-full relative   bg-white-100">
            <div className='p-8 bg-gradient-to-b from-red-100 md:gap-y-10 md:flex md:flex-col md:px-6 lg:px-8 text-slate-700'>
                <h1 className='py-4 md:px-3 text-xl md:text-5xl mr-auto roboto-bolder '>Vendor : {vendorData.name}</h1>
            </div>

            <div className='flex absolute top-2  w-full justify-center'>
                <div className=' h-10 w-full bg-white flex roboto-normal items-center justify-between px-4 shadow border border-gray-200 rounded-md md:max-w-5xl mx-auto'>
                    <div className='flex items-center'><p>Select Vendor</p></div>
                    <MdOutlineDoubleArrow className='w-6 h-6 text-green-500' />
                    <div className='flex items-center'><p>Select Requirements</p></div>
                    <MdOutlineDoubleArrow className='w-6 h-6 text-red-500' />
                    <div className='flex items-center'><p>Choose vendor</p></div>
                    <MdOutlineDoubleArrow className='w-6 h-6 text-red-500' />
                    <div className='flex items-center'><p>Advance payment</p></div>
                    <MdOutlineDoubleArrow className='w-6 h-6 text-red-500' />
                    <div className='flex items-center'><p>Confirm booking</p></div>
                </div>
            </div>


            <div className="p-10 relative">
                <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
                    {vendorData.images?.map((item, index) => (

                        <div key={index} className="grid gap-4 h-fit">
                            
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={item.image} alt="" />
                            </div>
                        </div>)
                    )}

                    {/* <div className="grid gap-4 h-fit">
                        <div className='mb-8'>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>

                    </div> */}
                </div>
                <div className="gap-10 flex">
                    <div className="md:w-full">


                        <div className="text-sm font-medium text-center mt-5 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px">
                                {/* <li className="me-2">
                                    <a 
                                        aria-current={tabIndex === 0 ? 'page' : undefined} onClick={() => setTabIndex(0)}
                                        className={` ${tabIndex === 0 ? 'border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''} cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                                    >
                                        Photo's</a>
                                </li> */}
                                <li className="me-2">
                                    <a
                                        onClick={() => setTabIndex(1)}
                                        className={` ${tabIndex === 1 ? 'border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''} cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                                        aria-current={tabIndex === 1 ? 'page' : undefined}
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="me-2">
                                    <a onClick={() => setTabIndex(2)}
                                        className={` ${tabIndex === 2 ? 'border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''} cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                                        aria-current={tabIndex === 2 ? 'page' : undefined}>Amenities</a>
                                </li>
                                <li className="me-2">
                                    <a onClick={() => setTabIndex(3)}
                                        className={` ${tabIndex === 3 ? 'border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''} cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                                        aria-current={tabIndex === 3 ? 'page' : undefined}>Review's</a>
                                </li>
                                <li className="me-2">
                                    <a onClick={() => setTabIndex(4)}

                                        className={` ${tabIndex === 4 ? 'border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''} cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                                        aria-current={tabIndex === 4 ? 'page' : undefined}>Contact's</a>
                                </li>

                                <li className="me-2">
                                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>

                                    </a>
                                </li>

                            </ul>

                        </div>
                        <div className="activeTab md:h-40">
                            {/* <div className={`photoTab ${tabIndex != 0 && "hidden"}`}>
                                <h2>

                                </h2>
                            </div> */}
                            <div className={`photoTab ${tabIndex != 1 && "hidden"}`}>
                                <div className='mt-3'>
                                    <h2>{
                                        vendorData.description
                                    }</h2>
                                </div>
                            </div>
                            <div className={`photoTab ${tabIndex != 2 && "hidden"}`}>
                                <div className='mt-3 flex gap-5 flex-wrap'>
                                    {
                                        vendorData.amenities.map((item) => {
                                            return (
                                                <div className='bg-blue-300 p-5 rounded-lg' key={item.id}>
                                                    {item.name}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={`photoTab ${tabIndex != 3 && "hidden"}`}>
                                <h2 className='mt-3'>Review's</h2>
                            </div>
                            <div className={`photoTab ${tabIndex != 4 && "hidden"}`}>
                                <div className='mt-3'>
                                    <h5><span className='font-medium'>Full address : </span> {vendorData.full_address}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="md:w-2/6">
                        <div className="mt-5">

                            <form className='bg-gray-200 p-5 rounded-2xl'>
                                <h2 className='uppercase'>Check quote</h2>
                                <p className='text-gray-400'>Starting Quote - Rs 1000000</p>
                                <div className="mb-5 mt-5">

                                    <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='First Name' required />
                                </div>
                                <div className="mb-5">
                                    <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Last name' required />
                                </div>
                                <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Email  Address' required />
                                </div>
                                <div className="mb-5">
                                    <label for="weddingDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wedding Date</label>
                                    <input type="date" id="weddingDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Last name' required />
                                </div>

                                <div className="mb-5">
                                    <label for="numberOfGuest" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wedding Date</label>
                                    <input type="number" id="numberOfGuest" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter number of guest' required />
                                </div>

                                <div className="mb-5">
                                    <label for="weddingDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provide a description</label>
 <textarea name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='Provide a brief description of the event' id=""></textarea>
                                 </div>
                                 
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default VendorDetails