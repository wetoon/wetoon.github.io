
import { Typewriter, Cursor } from "react-simple-typewriter"

export default function Portfolio() {

    return (
        <>
            <header className="flex bg-hero bg-fixed h-screen bg-cover bg-b-left min-h-96 md:bg-center items-center bg-no-repeat">
                <section className="w-[86%] max-w-7xl mx-auto text-white">
                    <h1 className="flex text-4xl md:text-5xl font-bold uppercase items-center">
                        <span className="pr-1.5">I'M</span>
                        <Typewriter
                            words={ ['Phiraphan','Designer','Developer','Freelancer'] }
                            loop={ true }
                            typeSpeed={ 100 }
                            delaySpeed={ 3000 }
                        ></Typewriter>
                        <span className="pb-1">
                            <Cursor />
                        </span>
                    </h1>
                    <p className="tracking-wide py-4">Web Designer, Web Developer, Freelancer</p>
                    <div className="flex gap-5">
                        <a target="_blank" href="https://facebook.com/me.phiraphan">
                            <svg className="size-5 md:size-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                            </svg>
                        </a>
                        <a target="_blank" href="mailto:natontmp123@gmail.com">
                            <svg className="size-5 md:size-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/frang_phiraphan/">
                            <svg className="size-5 md:size-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </a>
                        <a target="_blank" href="https://line.me/ti/p/~mx.5458">
                            <svg className="size-5 md:size-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/>
                            </svg>
                        </a>
                    </div>
                </section>
            </header>
            <main className="min-h-screen">
                <section className="py-10 mx-auto w-10/12 max-w-7xl">
                    <h1 className="uppercase py-8 text-center text-3xl sm:text-4xl font-semibold">language skill</h1>
                    <div className="flex flex-wrap md:pt-10">
                        <figure className="flex items-center justify-center w-full md:w-5/12 fade-right">
                            <img className="w-10/12 max-w-72" src="/assets/images/skill.png" alt="skill" />
                        </figure>
                        <figure className="flex gap-2 md:gap-8 flex-wrap w-full md:w-7/12 fade-left">
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>HTML</h4>
                                    <span>100%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-full h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>CSS</h4>
                                    <span>100%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-full h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>JavaScript & TypeScript</h4>
                                    <span>100%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-full h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>PHP</h4>
                                    <span>80%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-4/5 h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>Python</h4>
                                    <span>75%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-3/4 h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>SQL</h4>
                                    <span>75%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-3/4 h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>C#</h4>
                                    <span>75%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-3/4 h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>Go</h4>
                                    <span>50%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-1/2 h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>C++</h4>
                                    <span>30%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-[30%] h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                            <figcaption className="w-full h-10 md:w-[calc(50%-2rem)]">
                                <article className="flex py-1 justify-between">
                                    <h4>C</h4>
                                    <span>25%</span>
                                </article>
                                <div className="bg-gray-200">
                                    <div className="w-3/12 h-2 bg-yellow-600"></div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <section className="py-10 mx-auto w-11/12 max-w-7xl hidden">
                    <h1 className="uppercase py-8 text-center text-4xl font-semibold">skill</h1>
                </section>
            </main>
            <footer className="h-14 flex text-white bg-gray-950 items-center">
                <span className="block mx-auto w-11/12 max-w-7xl text-center text-sm md:text-base md:text-start">Copyright © 2025 Phiraphan</span>
            </footer>
        </>
    )
}