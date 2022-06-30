import type { NextPage } from 'next';
import { Header } from '../components/Header';

const Home:NextPage = () => {  
  return (
    <>
      <Header />
      <main className="w-full max-w-5xl mx-auto px-4 lg:px-0 mt-4">
        <div>
          <h1 className="text-2xl font-bold">HOME</h1>
          <span className="text-lg font-normal text-gray-400">Todo heheh</span>
        </div>

      </main>
    </>
  )
};

export default Home;
