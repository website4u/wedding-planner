export default function Footer() {
    return (
        <footer className="p-4 bg-white sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://serandibweddings.com" className="flex items-center">
                            <img src="/assets/swnobg.png" className="mr-2 w-28" alt="Serandib Weddings Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <a href="https://serandibweddings.com/resources" className="hover:underline">Wedding Planning</a>
                                </li>
                                <li>
                                    <a href="https://serandibweddings.com/contact" className="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <a href="https://github.com/serandibweddings" className="hover:underline">Instergram</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/serandibweddings" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <a href="https://serandibweddings.com/privacy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://serandibweddings.com/terms" className="hover:underline">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2022 <a href="https://serandibweddings.com" className="hover:underline">Serandib Weddings™</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    </div>
                </div>
            </div>
        </footer>
    );
}
