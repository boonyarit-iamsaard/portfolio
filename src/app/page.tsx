import Image from 'next/image';
import Link from 'next/link';

import profile from '@/assets/images/profile.jpg';

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      <section>
        <div className="container">
          <div className="space-y-4">
            <div className="group relative aspect-square w-60 overflow-hidden rounded-full outline-none ring-slate-200 transition-all duration-300 ease-in-out hover:ring-2 hover:ring-offset-2">
              <Image
                src={profile}
                width={240}
                height={240}
                className="object-fill transition-all duration-300 ease-in-out group-hover:scale-110"
                priority
                alt="Profile"
              />
            </div>
            <div className="space-y-2">
              <p className="uppercase text-slate-500">TAMBOON.DEV</p>
              <h1 className="text-4xl font-bold">
                A Self-taught Web Developer
              </h1>
              <p className="text-slate-500">
                I build websites with a focus on responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Hi,&nbsp;<span className="inline-block animate-wave">👋</span>
              &nbsp;I&apos;m Boonyarit Iamsa-ard
            </h2>
            <p className="text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              et eius doloribus necessitatibus, alias quod ducimus aperiam sit
              corporis deleniti.
            </p>
            <Link href="/">More about me</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Skills</h2>
            <p className="text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              et eius doloribus necessitatibus, alias quod ducimus aperiam sit
              corporis deleniti.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Ongoing projects</h2>
            <p className="text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              et eius doloribus necessitatibus, alias quod ducimus aperiam sit
              corporis deleniti.
            </p>
            <Link href="/">More projects</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Latest articles</h2>
            <p className="text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              et eius doloribus necessitatibus, alias quod ducimus aperiam sit
              corporis deleniti.
            </p>
            <Link href="/">More articles</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
