type PageHeaderProps = Readonly<{
  title: string;
  description: string;
}>;

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-muted/50">
      <div className="h-16" />
      <div className="container flex min-h-[35vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
