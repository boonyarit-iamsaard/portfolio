type TagProps = {
  tag: string;
};

export function Tag({ tag }: TagProps) {
  return (
    <span className="hover:border-border hover:bg-muted cursor-pointer rounded-sm border border-transparent px-2 py-1 text-sm font-medium">
      <span className="text-muted-foreground">#</span>
      {tag}
    </span>
  );
}
