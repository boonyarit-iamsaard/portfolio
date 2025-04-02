import { Button } from '@/common/components/ui/button';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-muted flex h-[35vh] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-primary text-2xl font-bold">
            Hi, I&apos;m Boonyarit
          </h1>
          <p className="text-muted-foreground">
            A <strong className="text-primary">Full Stack Developer</strong>{' '}
            with a passion for building scalable and maintainable web
            applications.
          </p>
          <Button>Contact me</Button>
        </div>
      </section>
    </main>
  );
}
