import React from 'react';
import { MemberCard } from '../components/organisms/cards';
import { Title, Typograpy } from '../components/atoms';
import { Carousel } from '../components/molecules';
import { dataMember } from '../utils/constant/dataMember';
import { Footer, NavigationBar } from '../components/templates';
import { about } from '../utils/constant/home';


const About = () => {
    return (

        <>
            <NavigationBar />

            <section>
                <Carousel />
            </section>
            <main className=' max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%]'>
                <section className=" text-center pt-16 pb-5">
                    <Title title={"about us"} />
                    <div className="flex justify-center">
                        <hr className='w-[40px] h-[4px] rounded-lg bg-gradient my-3' />
                    </div>
                    <Typograpy text={about} />
                </section>

                <section className="   ">

                    <div className="mb-28 text-center">
                        <Title title={" meet the teams "} />
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                        {dataMember.map((item, index) => {
                            return (
                                <>
                                    <MemberCard
                                        key={index}
                                        {...item}
                                    />
                                </>
                            );
                        })}
                    </div>

                </section>
            </main>

            <Footer />
        </>
    );
};

export default About;