import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import NavBar from'src/components/navbar';
import Hero from'src/components/home/hero';
import { redirect } from 'next/navigation';

import SignOut from 'src/components/SignOut';
import Services from 'src/components/home/services';
import Footer from 'src/components/home/footer';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
    <div className="Main">
      <NavBar />
      <Hero />
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
