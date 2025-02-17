import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="https://website-builderx-assets.s3.ap-south-1.amazonaws.com/official/logo-1.png" alt="Logo" />
                        </a>
                    </div>
                    
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"> Features </a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"> Solutions </a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"> Resources </a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 mr-10"> Pricing </a>
                    </div>
                    
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {isAuthenticated ? (
                            <button 
                                onClick={() => logout({ returnTo: window.location.origin })} 
                                className="px-4 py-3 text-base font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">
                                Logout
                            </button>
                        ) : (
                            <button 
                                onClick={() => loginWithRedirect()} 
                                className="px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                Login
                            </button>
                        )}
                    </div>
                    
                    <button className="lg:hidden p-2" onClick={() => setExpanded(!expanded)}>
                        {expanded ? '✖' : '☰'}
                    </button>
                </nav>
                
                {expanded && (
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flex flex-col px-6 space-y-1">
                            <a href="#" className="py-2 text-base font-medium text-black hover:text-blue-600"> Features </a>
                            <a href="#" className="py-2 text-base font-medium text-black hover:text-blue-600"> Solutions </a>
                            <a href="#" className="py-2 text-base font-medium text-black hover:text-blue-600"> Resources </a>
                            <a href="#" className="py-2 text-base font-medium text-black hover:text-blue-600"> Pricing </a>
                        </div>
                        <div className="px-6 mt-6 flex flex-col space-y-4">
                            {isAuthenticated ? (
                                <button 
                                    onClick={() => logout({ returnTo: window.location.origin })} 
                                    className="block w-full px-4 py-3 text-base font-semibold text-white bg-red-600 rounded-md text-center hover:bg-red-700">
                                    Logout
                                </button>
                            ) : (
                                <button 
                                    onClick={() => loginWithRedirect()} 
                                    className="block w-full px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-md text-center hover:bg-blue-700">
                                    Login
                                </button>
                            )}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
