import { Button } from "../ui/button";

export default function Home() {
 
  return (
    <>
      <div className="min-h-screen w-full flex">
        <div className="w-1/5 h-screen bg-red-300 sticky top-0 left-0 overflow-y-auto"></div>
        <div className="w-4/5 h-screen bg-red-500 overflow-y-auto p-6">
          <Button>Teste</Button>
          
        </div>
      </div>
    </>
  );
}
