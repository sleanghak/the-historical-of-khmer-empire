import React from 'react';
import { Typograpy, Title } from '../components/atoms';
import { Footer, NavigationBar } from '../components/templates';
import { Carousel } from '../components/molecules';
import { cambodiaHistory, cultureCivilization, cambodiaArt, about } from '../utils/constant/home';



const Home = () => {

    return (
        <>
            <NavigationBar />

            <section>
                <Carousel />
            </section>

            <section className='max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%] '>
                <div className='max-sm:py-[2%] sm:py-[5%] md:py-[5%] lg:py-[5%] xl:py-[5%] 2xl:py-[5%]'>


                    <div className='text-center mb-8'>
                        <Title title={"OUR STORY"} />
                        <div className="flex justify-center">
                            <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                        </div>
                        <Typograpy text={about} />
                    </div>



                    <div className="  text-center md:text-left">

                        {/* Cambodia History */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="/poster/cambodia-history.jpg" className="w-full" alt="cambodia-history" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Cambodia History"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={cambodiaHistory} />
                                    <a className='underline text-blue-600' href='#'>read more</a>
                                </div>
                            </div>
                        </div>

                        {/* Culture & Civilization */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="/poster/culture&civilization.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Culture & Civilization"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={cultureCivilization} />
                                    <a className='underline text-blue-600' href='#'>read more</a>
                                </div>
                            </div>
                        </div>

                        {/* Cambodia Art */}
                        <div className="max-sm:mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="/poster/cambodia-art.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Cambodia Art"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={cambodiaArt} />
                                    <a className='underline text-blue-600' href='#'>read more</a>
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

export default Home;