import Image from 'next/image';
import Link from 'next/link';
import { IconChevronRight, IconDownload } from '@tabler/icons-react';

import profile from '@/assets/images/profile.jpg';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid min-h-[calc(100vh-4rem)] content-center pb-16">
        <div className="container">
          <div className="text-xl text-muted-foreground">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <h2 className="text-base uppercase sm:text-xl">
                I&apos;m Boonyarit Iamsa-ard,
              </h2>
              <div>
                <Button asChild size="sm" variant="secondary">
                  {/* TODO: Add contact link */}
                  <Link href="/">
                    🟢 Available for hire
                    <IconChevronRight size={20} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              A Self-taught Web Developer
            </h1>
            <p className="mt-4">
              I craft responsive websites and web apps for quality user
              experiences. Let&apos;s build your strong online presence.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button asChild>
                {/* TODO: Add download link */}
                <Link href="/contact">
                  <IconDownload size={20} className="mr-2" />
                  Resume
                </Link>
              </Button>
              <Button asChild variant="outline">
                {/* TODO: Add contact link */}
                <Link href="/">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About me */}
      <section>
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="grid justify-center md:justify-start">
              <div className="group relative aspect-square w-60 overflow-hidden rounded-full outline-none ring-secondary transition-all duration-300 ease-in-out hover:ring-2 hover:ring-offset-2">
                <Image
                  src={profile}
                  fill
                  className="object-fill transition-all duration-300 ease-in-out group-hover:scale-110"
                  priority
                  alt="Profile"
                />
              </div>
            </div>
            <div className="grid content-center space-y-4 md:col-span-2">
              <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left">
                About me
              </h2>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">
                    Hi,&nbsp;
                    <span className="inline-block animate-wave">👋</span>
                    &nbsp;I&apos;m Boonyarit Iamsa-ard,&nbsp;
                  </span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis et eius doloribus necessitatibus, alias quod ducimus
                  aperiam sit corporis deleniti.
                </p>
                <Button asChild size="sm" variant="secondary">
                  <Link href="/about">More about me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left">
              Skills
            </h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                recusandae sunt ut amet fugiat vero excepturi! Velit tenetur
                consequatur itaque fuga accusamus esse, inventore accusantium
                deserunt neque dolore quia doloremque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing projects */}
      <section>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left">
              Ongoing projects
            </h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                recusandae sunt ut amet fugiat vero excepturi! Velit tenetur
                consequatur itaque fuga accusamus esse, inventore accusantium
                deserunt neque dolore quia doloremque.
              </p>
              <Button asChild size="sm" variant="secondary">
                <Link href="/projects">More projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-left">
              Latest Articles
            </h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                recusandae sunt ut amet fugiat vero excepturi! Velit tenetur
                consequatur itaque fuga accusamus esse, inventore accusantium
                deserunt neque dolore quia doloremque.
              </p>
              <Button asChild size="sm" variant="secondary">
                <Link href="/articles">More articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
