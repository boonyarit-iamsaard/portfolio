import { Button } from '@/common/components/ui/button';

export function CallToActionSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want to work together?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s connect and discuss your next project.
          </p>
          <Button size="lg" className="transition-transform hover:scale-105">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
