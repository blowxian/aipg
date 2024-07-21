const Cancel = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Payment Canceled</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        You have canceled the payment process.
                    </p>
                </div>
                {/*<div className="mt-8 space-y-6">
                    <p className="text-center text-sm text-gray-600">
                        To begin your journey with Coogle, please join our Discord community by clicking the link
                        below.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://discord.gg/GNv3qbm6" target="_blank"
                           className="group relative w-64 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Join Our Discord
                        </a>
                    </div>
                </div>*/}
            </div>
        </main>
    )
        ;
};

export default Cancel;
