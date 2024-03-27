import React from 'react';
import { Footer, NavigationBar } from '../components/templates';
import { Typograpy, Title } from '../components/atoms';
import { Carousel } from '../components/molecules';
import {
    civilization,
    architectureAndHousing,
    religion,
    clothes,
    sampotPhamuong,
    cuisine,
    visualArtsDance,
    dance,
    music,
    shadowTheatre,
    film,
} from '../utils/constant/civilization';



const Civilization = () => {
    return (
        <>
            <NavigationBar />

            <section>
                <Carousel />
            </section>

            <section className='max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%] '>
                <div className='max-sm:py-[2%] sm:py-[5%] md:py-[5%] lg:py-[5%] xl:py-[5%] 2xl:py-[5%]'>

                    <div className='text-center mb-6'>
                        <Title title={"Culture & Civilization"} />
                        <div className="flex justify-center">
                            <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                        </div>
                        <Typograpy text={civilization} />
                    </div>


                    <div className="  text-center md:text-left">

                        {/* Architecture And Housing */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/R.5b6954a17321a99ed23422fee95987e8?rik=NQWbLvVVcjr0eQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-yINwiibxeK8%2fTxIyOEnpoNI%2fAAAAAAAAKsQ%2fWv52XY0FrRM%2fs400%2fBeautiful%2bTraditional%2bHosue%2bin%2bCambodia.JPG&ehk=xWk0A4mOYGadDgjdzQJ5oOPMc8kdtV8%2f%2fYfFeViEOlE%3d&risl=&pid=ImgRaw&r=0" className="w-full" alt="cambodia-history" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Architecture And Housing"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={architectureAndHousing} />
                                </div>
                            </div>
                        </div>

                        {/* Religion*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/OIP.A44ZfQGBOk7puwMvlx9pkgHaE8?rs=1&pid=ImgDetMain" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Religion"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={religion} />
                                </div>
                            </div>
                        </div>

                        {/* Clothes */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://i.pinimg.com/originals/12/12/6c/12126c54ca2ad3cc81dc1440049c8ae3.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Clothes"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={clothes} /><br />
                                    <Typograpy text={sampotPhamuong} />
                                </div>
                            </div>
                        </div>

                        {/*Cuisine*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/08/shutterstock_397799917.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Cuisine"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={cuisine} />
                                </div>
                            </div>
                        </div>

                        {/* Arts And Literature */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://img.freepik.com/premium-photo/hanuman-tos-sa-kan-khon-thai-thai-traditional-dance-traditional-ramayana-drama-mahayana-temple-phra-nakhon-si-ayutthaya-province_369024-934.jpg?w=740" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Arts And Literature"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <h4 className='font-medium underline text-blue-700'>Visual artsDance</h4>
                                    <Typograpy text={visualArtsDance} />

                                    <h4 className='font-medium underline text-blue-700'>Dance</h4>
                                    <Typograpy text={dance} />

                                    <h4 className='font-medium underline text-blue-700'>Music</h4>
                                    <Typograpy text={music} />

                                    <h4 className='font-medium underline text-blue-700'>Shadow Theatre</h4>
                                    <Typograpy text={shadowTheatre} />

                                    <h4 className='font-medium underline text-blue-700'>Film</h4>
                                    <Typograpy text={film} />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <Footer />
        </>
    );
};

export default Civilization;