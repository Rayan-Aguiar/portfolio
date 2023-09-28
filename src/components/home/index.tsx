import { AtSign, CalendarDays, Linkedin, MapPin, Phone, Smile } from "lucide-react"
import Rayan from "../../assets/img/rayan.jpg"


export default function Home(){
    return(
        <div className="text-zinc-200 p-20">
            <div className="flex gap-12 items-center">
                <div className="flex flex-col items-center gap-2">
                    <img src={Rayan} className="w-80 rounded-3xl" alt="minha foto" />
                    <div className="flex items-center gap-2">

                        <a href="#" target="_blank"><Linkedin className="text-lime-500 hover:text-lime-400 duration-150" /></a>

                        <a href="https://www.google.com/" target="_blank">
                            <button className="rounded-full w-40 flex items-center justify-center h-8 p-2 bg-lime-500 text-zinc-900 font-medium hover:bg-lime-300 duration-150"> 
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 ">
                    <span className="font-medium text-lg flex gap-2">Olá pessoal! <Smile className="text-lime-500"/></span>
                    <h1 className="font-bold text-5xl">Eu sou o Rayan</h1>
                    <div className="flex gap-2">
                        <h2 className="font-bold text-4xl">Sou</h2>
                        <h2 className="font-bold text-4xl text-lime-500">front-end|</h2>
                    </div>
                        <div className="rounded-full bg-zinc-800 h-1 w-full"></div>
                    <div className=" w-[700px] flex flex-col gap-4 ">
                        <div className="mt-6  flex justify-between items-center ">
                            <span className="flex gap-2 items-center">
                                <CalendarDays className="text-lime-500"/>25/08/1994
                            </span>
                            <span className="flex gap-2 items-center">
                                <Phone className="text-lime-500"/><a href="tel:21991460601">(21) 99146-0601</a>
                            </span>
                            <span className="flex gap-2 items-center"> 
                                <AtSign className="text-lime-500"/>rayansiqueira@gmail.com
                            </span>
                        </div>
                        <div>
                            <span className="flex gap-2 items-center">
                                <MapPin className="text-lime-500"/> Nova Iguaçu - RJ
                            </span>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-justify text-zinc-500">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores accusamus laudantium architecto corporis. Ratione aspernatur corrupti magni placeat commodi harum est veritatis! Libero voluptate alias omnis odit quidem corporis rerum neque nihil, dignissimos ipsam, sit pariatur harum sunt dolores asperiores fuga quibusdam quaerat eveniet vero facilis atque in, dolorem ratione! Dolore asperiores, repellat nostrum distinctio natus et facilis ex, nisi vel voluptate explicabo quasi id recusandae mollitia impedit assumenda sequi aut tempora praesentium ipsa, necessitatibus officia itaque non. Velit quo error doloribus saepe fugit fuga, id illo laboriosam facere porro quis cumque. Tempora, incidunt? Eius quia fugiat laborum pariatur.</p>
            </div>

        </div>
    )
}