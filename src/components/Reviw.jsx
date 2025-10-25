import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Thingy = ({ nick, say, pace }) => (
    <div
        className="card bg-base-100 shadow-xl border border-warning hover:border-success transition duration-300 transform hover:scale-[1.02] flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay={pace}
    >
        <div className="card-body p-6 sm:p-8">
            <FaQuoteLeft className="text-warning text-3xl mb-4" />
            <p className="text-gray-700 italic grow leading-relaxed">"{say}"</p>
            <div className="card-actions justify-between items-center mt-4 border-t pt-3">
                <div className="flex text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h4 className="text-lg font-bold text-success">— {nick}</h4>
            </div>
        </div>
    </div>
);

const Reviw = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-primary mb-10 md:mb-16">
                    Customer reveiws of Toy Toupia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Thingy 
                        nick="Jhankar sir."
                        say="Honestly, I just bought a little plastic dragon, but the box was so sturdy. Great service and the dragon is magnificent. Five stars for the tiny details."
                        pace="100"
                    />
                    <Thingy 
                        nick="Rakib sir."
                        say="I was looking for a toy car that wouldn't immediately break. This one survived being launched off the roof. It`s a good purchase, I guess. Solid toys here."
                        pace="300"
                    />
                    <Thingy 
                        nick="Hablu coder."
                        say="The shipping was quicker than I expected. My niece loves the stuffed otter. It's really soft. Would use this site again when I need another present."
                        pace="500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviw;