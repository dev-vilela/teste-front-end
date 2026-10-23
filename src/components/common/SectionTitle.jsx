export default function SectionTitle({ children, className = 'mb-6' }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl font-bold text-[#3442B5] relative inline-block">
        <span className="before:content-[''] before:absolute before:top-1/2 before:-left-16 before:w-12 before:h-[2px] before:bg-[#3442B5] after:content-[''] after:absolute after:top-1/2 after:-right-16 after:w-12 after:h-[2px] after:bg-[#3442B5]">
          {children}
        </span>
      </h2>
    </div>
  );
}
