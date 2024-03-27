import React from 'react';
import { Footer, NavigationBar } from '../components/templates';
import { Typograpy, Title } from '../components/atoms';
import { Carousel } from '../components/molecules';
import {
    art,
    architecture,
    sculpture,
    destruction,
    music,
    classical,
    rockAndPop,
    literatuerOfCambodia,
    danceInCambodia,
    classicalDance,
    folkDance,
    SocialDance,
    theatreofCambodia,
    lakhonPreahReachTrop,
    lakhonKhol,
    lakhonPolSrey,
    lakhonBerkBat,
    lakhonNangSbek,
    yike,
    lakhonBassacorBasak,
    lakhonPhlengKar,
} from '../utils/constant/art';


const Art = () => {
    return (
        <>
            <NavigationBar />

            <section>
                <Carousel />
            </section>

            <section className='max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%] '>
                <div className='max-sm:py-[2%] sm:py-[5%] md:py-[5%] lg:py-[5%] xl:py-[5%] 2xl:py-[5%]'>

                    <div className='text-center mb-6'>
                        <Title title={"ART OF CAMBODIA"} />
                        <div className="flex justify-center">
                            <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                        </div>
                        <Typograpy text={art} />
                    </div>


                    <div className="  text-center md:text-left">

                        {/* ART ARCHITECTURE OF CAMBODIA */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://www.aljazeera.com/wp-content/uploads/2016/02/d3a2069a91744d6fb98345d8878d7499_18.jpeg?fit=999%2C561" className="w-full" alt="cambodia-history" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"ART ARCHITECTURE OF CAMBODIA"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={architecture} />
                                </div>
                            </div>
                        </div>

                        {/* ART SCULPTURE OF CAMBODIA*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://pbs.twimg.com/media/CBAH8EcUUAAnW6N.jpg:large" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"ART SCULPTURE OF CAMBODIA"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={sculpture} />
                                </div>
                            </div>
                        </div>

                        {/* ART DRAWING OF CAMBODIA */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2016_Phnom_Penh%2C_Pa%C5%82ac_Kr%C3%B3lewski%2C_Malowid%C5%82a_przedstawiaj%C4%85ce_sceny_z_Reamker_(35).jpg/440px-2016_Phnom_Penh%2C_Pa%C5%82ac_Kr%C3%B3lewski%2C_Malowid%C5%82a_przedstawiaj%C4%85ce_sceny_z_Reamker_(35).jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"ART DRAWING OF CAMBODIA"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={destruction} />
                                </div>
                            </div>
                        </div>

                        {/*ART MUSIC OF CAMBODIA*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://cf.shopee.com.my/file/e0bafa60a491bd4a734387b0404e3b34" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"ART MUSIC OF CAMBODIA"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={music} />
                                </div>
                                <div className='my-3'>
                                    <Title title={"FOLK AND CLASSICAL MUSIC"} />
                                </div>
                                <div>
                                    <Typograpy text={classical} />
                                </div>
                                <div className='my-3'>
                                    <Title title={"CAMBODIAN ROCK AND POP"} />
                                </div>
                                <div>
                                    <Typograpy text={rockAndPop} />
                                </div>

                            </div>
                        </div>

                        {/* LITERATURE OF CAMBODIA */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://www.emergingmarkets.asia/consulting/wp-content/uploads/sites/2/2017/10/20170712_151229-4-700x300.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"LITERATURE OF CAMBODIA"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={literatuerOfCambodia} />
                                </div>
                            </div>
                        </div>

                        {/*DANCE IN CAMBODIA*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://i.pinimg.com/originals/83/d9/19/83d9198c0569588438d4e430f065159a.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"DANCE IN CAMBODIA"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={danceInCambodia} />
                                </div>
                                <div className='my-3'>
                                    <Title title={"CLASSICAL DANCE"} />
                                </div>
                                <div>
                                    <Typograpy text={classicalDance} />
                                </div>
                                <div className='my-3'>
                                    <Title title={"FOLK DANCE"} />
                                </div>
                                <div>
                                    <Typograpy text={folkDance} />
                                </div>
                                <div className='my-3'>
                                    <Title title={"SOCAIL DANCE"} />
                                </div>
                                <div>
                                    <Typograpy text={SocialDance} />
                                </div>

                            </div>
                        </div>


                        {/* THEATRE OF CAMBODIA */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://oivietnam.com/wp-content/uploads/2019/09/CLA-Performance-Image-by-James-Pham-4.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"THEATRE OF CAMBODIA"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={theatreofCambodia} />
                                </div>

                                <div className='my-3'>
                                    <Title title={"CLASSICAL"} />
                                </div>

                                <div>
                                    <Typograpy text={lakhonPreahReachTrop} /><br />
                                    <Typograpy text={lakhonKhol} /><br />
                                    <Typograpy text={lakhonPolSrey} /><br />
                                    <Typograpy text={lakhonBerkBat} /><br />
                                    <Typograpy text={lakhonNangSbek} />
                                    <div className='my-3'>
                                        <Title title={"FOLK"} />
                                    </div>
                                    <Typograpy text={yike} /><br />
                                    <Typograpy text={lakhonBassacorBasak} /><br />
                                    <Typograpy text={lakhonPhlengKar} /> <br />
                                    <Typograpy text={"Lakhon ape is a mixture of yike and classical dance form"} /><br />
                                    <Typograpy text={"Lakhon kamnap is a poetry theatre"} /> <br />
                                    <Typograpy text={"Lakhon mahori (lit., mahori theatre) consists of folkloric dance accompanied by a mahori ensemble."} /> <br />
                                    <div className='my-3'>
                                        <Title title={"MODERN"} />
                                    </div>
                                    <Typograpy text={"Lakhon niyeay is a spoken theatre"} />

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

export default Art;