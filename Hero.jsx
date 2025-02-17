import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent form submission reload
        if (input) {
            navigate(`/room/${input}`); // Use React Router navigation
        }
    };

    return (
        <div className="bg-gray-50">
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                                    Unlock Your Potential with Our Innovative Team
                                </h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                    Start a free conference call with your friends, family, or team members. No sign-up required.
                                </p>
                                <form onSubmit={submitHandler} className="mt-8 sm:mt-10">
                                    <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Enter Room ID"
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 sm:border-none"
                                            required
                                        />
                                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                            <button
                                                type="submit"
                                                className="inline-flex px-6 py-3 text-lg font-bold text-white bg-pink-600 rounded-lg hover:bg-gray-600"
                                            >
                                                Join Room
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://static.vecteezy.com/system/resources/previews/010/871/586/non_2x/3d-video-call-via-laptop-illustration-png.png"
                                alt="Hero Illustration"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
