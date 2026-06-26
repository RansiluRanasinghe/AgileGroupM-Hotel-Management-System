"use client";

const selectBase =
  "h-[52px] w-full appearance-none rounded-[26px] border-2 bg-white pl-[22px] pr-[44px] font-outfit text-[15px] leading-[normal] outline-none transition-colors";

function ChevronDown() {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" className="h-4 w-4" />
  );
}

export default function SelectField({
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  error,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
}) {
  const borderCls = error
    ? "border-red-400 focus:border-red-400"
    : "border-sand focus:border-sage";

  return (
    <div className="flex flex-1 min-w-0 flex-col gap-[4px]">
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${selectBase} ${borderCls} ${value ? "text-jungle" : "text-jungle/50"}`}
        >
          <option value="" disabled style={{ color: "rgba(58,90,64,0.5)" }}>
            {placeholder}
          </option>
          {options.map(opt => (
            <option key={opt} value={opt} style={{ color: "#3a5a40" }}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}
