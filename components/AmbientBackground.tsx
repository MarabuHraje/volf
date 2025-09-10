"use client"
// Odlehčené pozadí bez sledování myši & JS animací – lepší výkon
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(176,122,54,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(62,89,63,0.18),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(130deg,#0F2A22_0%,#12352A_40%,#0F2A22_85%)]" />
      <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-copper/15 blur-[120px] opacity-40" />
      <div className="absolute bottom-[-30rem] right-[-20rem] w-[50rem] h-[50rem] rounded-full bg-olive/20 blur-[140px] opacity-35" />
    </div>
  )
}
