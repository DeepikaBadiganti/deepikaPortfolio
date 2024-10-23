import HomeBtn from "@/components/HomeBtn";


export default function SubPagesLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-center pt-20 px-16 ">
        <HomeBtn/>
        {children}
    </main>
    
  );
}
