export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6 md:px-10 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <span className="font-serif text-base text-heading">
          Tyshawn Allison
        </span>
        <span className="text-[0.75rem] text-muted">&copy; 2026</span>
      </div>
    </footer>
  );
}
