import type { Metadata } from "next";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up — River Nest Eco Villa",
};

function LeafIcon() {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img src="/icons/leaf.svg" alt="" aria-hidden="true" className="h-[26px] w-[26px] shrink-0" />
  );
}

function CheckIcon() {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img src="/icons/check.svg" alt="" aria-hidden="true" className="h-4 w-4" />
  );
}

const facts = [
  "Free cancellation up to 7 days before",
  "Private river access & guided jungle trails",
  "Organic breakfast included with every stay",
];

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">

      {/* ── Mobile top bar (hidden on desktop) ── */}
      <div className="flex shrink-0 items-center gap-3 bg-jungle-dark px-6 py-4 lg:hidden">
        <LeafIcon />
        <span className="font-lora text-[20px] font-medium tracking-[0.5px] text-sand-light">
          River Nest
        </span>
      </div>

      {/* ══════════════════════════════════════════
          Brand Panel — desktop only, left 50%
          ══════════════════════════════════════════ */}
      <div className="relative hidden h-full w-1/2 shrink-0 flex-col items-start justify-between overflow-hidden bg-jungle-dark p-[56px] lg:flex">

        {/* Decorative ellipse */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/ellipse.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[280px] top-[-160px] h-[420px] w-[520px] select-none"
        />

        {/* Logo */}
        <div className="relative z-10 flex shrink-0 items-center gap-[12px]">
          <LeafIcon />
          <span className="font-lora text-[22px] font-medium leading-[normal] tracking-[0.5px] text-sand-light">
            River Nest
          </span>
        </div>

        {/* Tagline */}
        <div className="relative z-10 flex shrink-0 flex-col items-start gap-[20px]">
          <p className="font-outfit text-[12px] font-medium leading-[normal] tracking-[3px] text-sage">
            ECO VILLA · KITULGALA
          </p>
          <div className="flex flex-col items-start gap-[2px] font-lora text-[40px] font-normal leading-[46px]">
            <p className="text-sand-light">Disconnect from noise.</p>
            <p className="text-sage">Reconnect with nature.</p>
          </div>
          <p className="w-[432px] font-outfit text-[15px] font-normal leading-[26px] text-sand-light/85">
            A sustainable eco-retreat nestled in the heart of Sri Lanka&apos;s
            lush rainforests. Create your account to plan stays, curate
            experiences, and track your bookings.
          </p>
        </div>

        {/* Feature bullets */}
        <div className="relative z-10 flex shrink-0 flex-col items-start gap-[16px]">
          {facts.map(fact => (
            <div key={fact} className="flex items-center gap-[14px]">
              <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[18px] border-[0.8px] border-sage/40 bg-sage/16">
                <CheckIcon />
              </div>
              <p className="font-outfit text-[14.5px] font-normal leading-[normal] text-sand-light/85">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          Form Panel — right 50% on desktop, full width on mobile
          ══════════════════════════════════════════ */}
      <div className="flex flex-1 flex-col items-center overflow-y-auto bg-sand-light py-10 lg:h-full lg:w-1/2 lg:shrink-0 lg:justify-center lg:overflow-hidden lg:py-0">
        <SignUpForm />
      </div>

    </div>
  );
}
