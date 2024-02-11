import Rayan from "../../assets/img/rayan.jpg"

export default function Header(){

    return(
        <div className="flex w-4/5 h-fit gap-8 items-center">
            <div>
              {" "}
              <img src={Rayan} alt="Minha foto" className="w-32 h-32 rounded-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-4xl">Rayan Siqueira</h1>
              <span className="text-zinc-500 text-lg">
                Desenvolvedor Front-end
              </span>
              <div className="flex gap-4 mt-2">
                <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
                  React JS
                </span>
                <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
                  Next JS
                </span>
                <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
                  Vue JS
                </span>
                <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
                  Node JS
                </span>
                <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
                  TypeScript
                </span>
                <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
    )
}