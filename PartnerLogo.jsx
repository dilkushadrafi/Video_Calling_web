import React from 'react';

function PartnerLogo() {
    return (
        <section className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20 xl:py-32">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 xl:grid-cols-2">
                    <div className="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                            Customers and brands love using Rareblocks
                        </h2>
                        <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
                            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
                            proin faucibus nibh et sagittis.
                        </p>
                    </div>

                    <div className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0">
                        <div className="absolute inset-16">
                            <div
                                className="w-full h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"
                                style={{
                                    background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                                }}
                            ></div>
                        </div>

                        <div className="relative space-y-5">
                            {[...Array(3)].map((_, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className={`grid grid-cols-1 gap-5 sm:grid-cols-3 ${rowIndex === 1 ? 'xl:translate-x-6' : rowIndex === 2 ? 'xl:translate-x-12' : ''}`}
                                >
                                    {["vertex", "martino", "squarestone", "waverio", "fireli", "virogan", "aromix", "natroma", "waverio-2"].slice(rowIndex * 3, (rowIndex + 1) * 3).map((logo, index) => (
                                        <div key={index} className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                                            <img
                                                className="w-auto h-8"
                                                src={`https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-${logo}.svg`}
                                                alt={logo}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50"></div>
        </section>
    );
}

export default PartnerLogo;
