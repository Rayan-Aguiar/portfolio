export default function Footer(){
    return(
        <div className="w-full px-20 py-10 flex items-center justify-between">
            <span className="text-zinc-500">Copyright 2023 - Todos os direitos resevados</span>
            <div className="flex gap-8">
                <a href="#" className="text-zinc-300 hover:text-lime-500 duration-150">Linkedin</a>
                <a href="#" className="text-zinc-300 hover:text-lime-500 duration-150">Instagram</a>
            </div>
        </div>
    )
}