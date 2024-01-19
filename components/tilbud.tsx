export default function Tilbud() {
  return (


    <section className = "flex h-screen bg-sky-700 pt-[8%]">

      <div className = "h-full w-1/2 flex items-center justify-center ml-20 pr-8">
        <div className="h-[350px] w-[55%] bg-white">

        </div>
        {/* <img src="/public/user/gruop-coding.png" alt="Coding illustrasion"/> */}
      </div>

      <div className = "w-1/2 h-[100%] flex flex-col justify-center pl-[7rem]">

        <div className="opacity-40">
          <span>
            Hva du får
          </span>
        </div>

        <div>
          <h2 className ="text-xl">
             <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
              Join
              </span> 
              {" nå og se for deg selv"}
          </h2>
        </div>

        <div className = "text-xl mb-5">
          <p>
            Ingenting bedre enn å jobbe i grupper eller alene og få hjelp til personale prosjekter man holder på med!
          </p>
        </div>

        <div>
          <ul className="tilbud">
            <li className="mb-4">
              Lære å kode ved å kode selv
            </li>
            <li className="mb-4">
              Ha et trygt sted å gjøre feil
            </li>
            <li className="mb-4">
              Helt gratis
            </li>
          </ul>
        </div>


        <div className="flex items-center h-[20%]">
          <button className="h-max w-max bg-sky-600 hover:bg-sky-200 px-6 py-3 rounded-2xl  hover:text-black duration-200">
            Join Discord!
          </button>
        </div>


      </div>

    </section>
  );

  };