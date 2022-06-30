import { LogoText } from "./LogoText";

export function Header() {
  return (
    <header className="bg-[#222830] text-white h-18 w-full">
      <div className="w-full max-w-5xl mx-auto py-4 px-4 lg:px-0">
        <LogoText />
      </div>
    </header>
  )
};
