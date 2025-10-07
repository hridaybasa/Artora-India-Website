interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  dark?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className = '',
  dark = false
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 ${dark ? 'bg-black text-white' : 'bg-white text-black'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
