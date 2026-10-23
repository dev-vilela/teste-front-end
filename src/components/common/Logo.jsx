
export default function Logo({
  textClass = 'text-3xl text-[#2A2359] tracking-tight',
  dotClass = 'w-2 h-2 mb-3',
  className = '',
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* EC dentro de uma bola amarela */}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1CD31] text-sm font-extrabold text-[#ffffff]">
        EC
      </span>

      
    <span className={`-ml-1 font-extrabold text-[#2A2359] tracking-tight ${textClass}`}>
      onverse
    </span>
    </div>
  );
}
