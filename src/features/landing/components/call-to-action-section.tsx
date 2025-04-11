import { Button } from '@/common/components/ui/button';

export function CallToActionSection() {
  return (
    <section
      data-section="call-to-action"
      className="container flex flex-col items-center justify-center gap-8 py-24"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Want to work together?
        </h2>
        <p className="text-muted-foreground text-lg">
          Let&apos;s connect and discuss your next project.
        </p>
      </div>
      <Button size="lg">Contact me</Button>
    </section>
  );
}
