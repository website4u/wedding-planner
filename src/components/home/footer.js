export default function Footer() {
    return (
        <footer className="p-4 bg-rose md:p-8 lg:p-10 ">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-brown">
                    Wedding Planner
                </a>
                <p className="my-6 text-lbule ">Open-source library of over 400+ web components and interactive elements built for better web.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-brown">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-brown sm:text-center">© 2023 <a href="https://dev.kythonlk.com" className="hover:underline">Website4u</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
