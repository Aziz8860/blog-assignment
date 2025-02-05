import { Footer } from '@/components/custom/Footer';
import { Navbar } from '@/components/custom/Navbar';
import { Posts } from '@/components/custom/Posts';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Posts />
      </main>
    </>
  );
}
