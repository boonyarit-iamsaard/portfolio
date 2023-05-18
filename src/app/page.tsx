import Image from 'next/image';
import Link from 'next/link';

import profile from '@/assets/images/profile.jpg';

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <div className="container">
          <div className="space-y-4">
            <div className="group relative aspect-square w-60 overflow-hidden rounded-full outline-none ring-secondary transition-all duration-300 ease-in-out hover:ring-2 hover:ring-offset-2">
              <Image
                src={profile}
                width={240}
                height={240}
                className="object-fill transition-all duration-300 ease-in-out group-hover:scale-110"
                priority
                alt="Profile"
              />
            </div>
            <div className="space-y-2 text-xl text-muted-foreground">
              <p className="uppercase">TAMEBOON.DEV</p>
              <h1 className="text-4xl font-bold text-foreground">
                A Self-taught Web Developer
              </h1>
              <p>
                I craft responsive websites and web apps for quality user
                experiences.
              </p>
              <p>Let&apos;s build your strong online presence.</p>
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
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              et eius doloribus necessitatibus, alias quod ducimus aperiam sit
              corporis deleniti.
            </p>
            <Link
              href="/about"
              className="block text-sm underline underline-offset-4"
            >
              More about me
            </Link>
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
            <Link
              href="/"
              className="block text-sm underline underline-offset-4"
            >
              More projects
            </Link>
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
            <Link
              href="/articles"
              className="block text-sm underline underline-offset-4"
            >
              More articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
