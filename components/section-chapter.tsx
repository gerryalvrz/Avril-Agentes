import { cn } from "@/lib/utils";

type SectionChapterProps = {
  variant: "light" | "dark";
  className?: string;
  children: React.ReactNode;
};

/**
 * Overrides semantic CSS variables for this subtree so sections can alternate
 * light/dark “chapters” without toggling the global theme or the navbar.
 */
export function SectionChapter({ variant, className, children }: SectionChapterProps) {
  return (
    <div
      className={cn(
        variant === "light" ? "section-chapter-light" : "section-chapter-dark",
        "w-full bg-background text-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
