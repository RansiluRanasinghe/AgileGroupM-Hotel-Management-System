"use client";

import { useState } from "react";

const inputCls =
  "h-[52px] flex-[1_0_0] min-w-0 rounded-[26px] border-[1.4px] border-[#dad7cd] bg-white px-[22px] font-outfit text-[15px] leading-[normal] text-[#3a5a40] placeholder:text-[rgba(58,90,64,0.5)] outline-none transition-colors focus:border-[#a3b18a]";

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function PasswordFields() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex w-full gap-[14px]">
      <div className="relative flex-[1_0_0] min-w-0">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password*"
          className={`${inputCls} w-full pr-[44px]`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((v) => !v)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[rgba(58,90,64,0.5)] hover:text-[#3a5a40] transition-colors"
        >
          <EyeIcon open={showPassword} />
        </button>
      </div>
      <div className="relative flex-[1_0_0] min-w-0">
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm Password*"
          className={`${inputCls} w-full pr-[44px]`}
        />
        <button
          type="button"
          onClick={() => setShowConfirm((v) => !v)}
          aria-label={showConfirm ? "Hide password" : "Show password"}
          className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[rgba(58,90,64,0.5)] hover:text-[#3a5a40] transition-colors"
        >
          <EyeIcon open={showConfirm} />
        </button>
      </div>
    </div>
  );
}
