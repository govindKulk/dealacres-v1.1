import React from 'react';

const Card = ({ imageUrl, yearEstd, projects, description }) => {
    return (
        <div className=" w-[17rem] h-64 px-4 py-3 bg-white rounded-lg overflow-hidden relative border-2 border-l-0 shadow-lg">
            <div className="flex flex-row items-end">
                <img src={imageUrl} alt="Card Image" className="w-2/6 h-20 object-cover border-2 border-black" />
                <div className="ml-3 text-sm flex flex-row items-end gap-3">
                    <div>
                        <span className="text-gray-700">{yearEstd}</span>
                        <br />
                        <span className="text-gray-700 font-semibold">Year Estd.</span>
                    </div>
                    <div className="mt-1">
                        <span className="text-gray-700">{projects}</span>
                        <br />
                        <span className="text-gray-700 font-semibold ">Projects</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-700 text-[0.85rem]">{description}<span className="text-blue-500 ml-1">Read More...</span></p>
            </div>
            {/* Blue shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-700 opacity-80"></div>
        </div>
    );
};

const PopularBuilder = () => {
    return (
        <div className='py-8 sm:py-10 mx-4 sm:mx-0'>
            <h2 className='text-center text-xl md:text-3xl font-semibold mt-2'>Popular Builders in India</h2>
            <p className='text-center text-md md:text-xl mt-2'>Best Developers in India</p>
            <div className='flex justify-center mt-8'>
                <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Card
                            key={index}
                            imageUrl="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9CTXVKRS9NQUZyTkdCTXVKRS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAIAg3dcb3g-o_F2L_xZP7JldXp_IBdBptw57rQy7ZwyW&exp=1711453257&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAOG3JTF5XMAOVGdmzDDYKkQ2cCbOUIYkxlc7CeL0xPH6"
                            yearEstd="1986"
                            projects="105"
                            description="Built on the roots of not only meeting customer expectations but also envisaging the future needs of consumers, M3M strives to create developments that exceed buyer expectations through research."
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularBuilder;
