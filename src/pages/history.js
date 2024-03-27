import React from 'react';
import { Typograpy, Title } from '../components/atoms';
import { Footer, NavigationBar } from '../components/templates';
import { Carousel } from '../components/molecules';
import {
    history,
    prehistory,
    funanKingdom,
    chenlaKingdom,
    khmerEmpire,
    longvekEra,
    oudongEra,
    frenchColonialPeriod,
    administrationOfSihanouk,
    khmerRepublicAndTheWar,
    khmerRouge,
    vietnameseOccupationAndThePRK,
    modernCambodia,
} from '../utils/constant/history';


const History = () => {
    return (
        <>
            <NavigationBar />

            <section>
                <Carousel />
            </section>

            <section className='max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%] '>
                <div className='max-sm:py-[2%] sm:py-[5%] md:py-[5%] lg:py-[5%] xl:py-[5%] 2xl:py-[5%]'>
                    <div className='text-center mb-6'>
                        <Title title={"History Of Cambodia"} />
                        <div className="flex justify-center">
                            <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                        </div>
                        <Typograpy text={history} />
                    </div>



                    <div className="  text-center md:text-left">

                        {/* Prehistory Of Cambodia */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/OIP.NxHkoyUCtCmnchja57DZ4AHaFj?rs=1&pid=ImgDetMain" className="w-full" alt="cambodia-history" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Prehistory Of Cambodia"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={prehistory} />
                                </div>
                            </div>
                        </div>

                        {/* Funan Kingdom (1st Century – 550/627)*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://imvoyager.com/wp-content/uploads/2018/12/DSC_0642-2-640x548.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Funan Kingdom (1st Century – 550/627)"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={funanKingdom} />
                                </div>
                            </div>
                        </div>

                        {/* Chenla Kingdom (6th Century – 802) */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://www.seeasiadifferently.com/wp-content/uploads/sites/795/2020/07/Sambor-Prey-Kuk.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Chenla Kingdom (6th Century – 802)"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={chenlaKingdom} />
                                </div>
                            </div>
                        </div>

                        {/*Khmer Empire (802–1431)*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/OIP.ZytAXm62I7PiSgTJJjwvEgHaFJ?rs=1&pid=ImgDetMain" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Khmer Empire (802–1431)"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={khmerEmpire} />
                                </div>
                            </div>
                        </div>

                        {/* Longvek Era (1516-1618) */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://pppenglish.sgp1.cdn.digitaloceanspaces.com/image/main/view_of_longvek_from_1749_by_the_dutch_engraver_jacobus_van_der_schley._national_library_of_the_netherlands.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Longvek Era (1516-1618)"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={longvekEra} />
                                </div>
                            </div>
                        </div>

                        {/*Oudong Era*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://3.bp.blogspot.com/-U8FUzzCPMTQ/WAoI1yP0HOI/AAAAAAAARnU/UAlU9Hqn2ycDe78O8NWMQV73eIJItLrOgCLcB/s1600/Phnom%2BUdong11.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Oudong Era"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={oudongEra} />
                                </div>
                            </div>
                        </div>

                        {/* French Colonial Period (1863–1953) */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/OIP.j-h8OOcnlc-qXRRzy7QwSwHaEb?w=768&h=459&rs=1&pid=ImgDetMain" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"French Colonial Period (1863–1953)"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={frenchColonialPeriod} />
                                </div>
                            </div>
                        </div>

                        {/*Administration Of Sihanouk (1953–70)*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://alphahistory.com/vietnamwar/wp-content/uploads/2015/11/sihanouk.jpg" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Administration Of Sihanouk (1953–70)"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={administrationOfSihanouk} />
                                </div>
                            </div>
                        </div>

                        {/* Khmer Republic And The War (1970–75) */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/OIP.z8pxwDy9G53p3CSRca4vSQHaEK?w=1200&h=675&rs=1&pid=ImgDetMain" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Khmer Republic And The War (1970–75)"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={khmerRepublicAndTheWar} />
                                </div>
                            </div>
                        </div>

                        {/*Khmer Rouge (1975-79)*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/OIP.zCe5AJSHpNqRr49b99pkkwHaE-?w=612&h=411&rs=1&pid=ImgDetMain" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Khmer Rouge (1975-79)"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={khmerRouge} />
                                </div>
                            </div>
                        </div>

                        {/*Vietnamese Occupation And The PRK (1979–93) */}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/R.cbe488af6c9b7af71ce156c79849c744?rik=XqPy2f%2fRXMUK3w&riu=http%3a%2f%2f3.bp.blogspot.com%2f_m1HP9TrsomI%2fSICLSIKZLfI%2fAAAAAAAAAMo%2fdDZf8rkU8jk%2f2.jpg&ehk=Rv%2fIpCz9PUr3LgYHvXrJ3UJ6suYT3b%2fJY7zfM%2b0FfL0%3d&risl=&pid=ImgRaw&r=0" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-3'>
                                    <Title title={"Vietnamese Occupation And The PRK (1979–93)"} />
                                </div>
                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={vietnameseOccupationAndThePRK} />
                                </div>
                            </div>
                        </div>

                        {/*Modern Cambodia (1993–Present)*/}
                        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                            <div className="mb-6 md:order-2 md:mb-0">
                                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg  "
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <img src="https://th.bing.com/th/id/R.cadc38576bf14c20547373d8371c12e6?rik=5G6ee10iImVC8w&riu=http%3a%2f%2fwww.yenbaet.com%2fimg%2fs%2fv-3%2fp1131770506-3.jpg&ehk=Rd8aYyYXskcKrbcy2WlZC4cgMIdy5wREq%2f%2fc%2f8czsq0%3d&risl=&pid=ImgRaw&r=0" className="w-full" alt="Louvre" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </div>
                            </div>

                            <div className="md:order-1">
                                <div className='mb-3'>
                                    <Title title={"Modern Cambodia (1993–Present)"} />
                                </div>

                                <p className="mb-6 text-neutral-500  ">
                                    <small>Published <u>18.03.2024</u> by
                                        <a href="#!"> Admin</a></small>
                                </p>
                                <div>
                                    <Typograpy text={modernCambodia} />
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

export default History;