import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#202B57] w-full h-16 p-5 flex justify-between items-center text-white font-roboto ">
     <h1 className="text-2xl font-bold">U</h1>
     <Link className='font-semibold' href={'/'}>Identificação do cliente</Link>
    </header>
  );
}