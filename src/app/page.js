import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import NavBar from'src/components/navbar';
import Hero from'src/components/home/hero';

import SignOut from 'src/components/SignOut';
import Services from 'src/components/home/services';
import Footer from 'src/components/home/footer';
import VendorList from 'src/components/VendorList';
import VendorCategoryList from 'src/components/VendorCategoryList';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
    <div id="Main">
      <NavBar />
      <Hero />
      <div className='dark:bg-gray-800 p-4'>
        <h2 className="text-3xl font-semibold text-white pl-4 mb-6">Featured Vendor Categories</h2>
        <VendorCategoryList />
      </div>

      <div className='dark:bg-gray-800 p-4'>
        <h2 className="text-3xl font-semibold pl-4  text-white mb-6">Featured Vendors</h2>
        <VendorList />
      </div>
     

      <Services />
      <Footer />
    </div>);
  }

  return (
    <div className="card">
      <h2>Welcome!</h2>
      <code className="highlight">{user.role}</code>
      <Link className="button" href="/profile">
        Go to Profile
      </Link>
      <SignOut />
    </div>
  );
}
