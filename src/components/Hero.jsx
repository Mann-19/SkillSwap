import { Plus, ArrowDown } from "lucide-react";
import { useCollapseForm } from "../contexts/FormCollapseContext";

export const Hero = () => {
  const { openForm } = useCollapseForm();

  return (
    <section className="z-10 mt-20">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-[5.25rem] w-fit mx-auto font-light text-white leading-tight opacity-80">
          Exchange Skills,
          <br />
          <span className="text-emerald-400">Build Communities</span>
        </h1>

        <p className="text-xl text-zinc-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Connect with talented individuals and swap expertise. Learn something
          new while sharing what you know best.
        </p>
      </div>

      <div className="flex gap-4 justify-center items-center mb-12">
        <button
          type="button"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-medium transition-all flex items-center space-x-3 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transform cursor-pointer"
          onClick={openForm}
        >
          <Plus className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
          <span>Create a Trade</span>
        </button>

        <button className="text-emerald-400 flex space-x-5 ml-4 cursor-pointer hover:scale-105 transform transition-all hover:text-emerald-300">
          <span>Browse Skills</span>
          <ArrowDown className="text-emerald-400 hover:text-emerald-300 w-5 h-5 aspect-square" />
        </button>
      </div>

      <div className="flex justify-between max-w-xl mx-auto mt-18">
        <div className="flex flex-col text-center">
          <h2 className="text-emerald-400 text-3xl font-bold">10K+</h2>
          <span className="text-base text-zinc-400 tracking-wider">
            Active Members
          </span>
        </div>

        <div className="flex flex-col text-center">
          <h2 className="text-emerald-400 text-3xl font-bold">500+</h2>
          <span className="text-base text-zinc-400 tracking-wider">
            Skills Available
          </span>
        </div>

        <div className="flex flex-col text-center">
          <h2 className="text-emerald-400 text-3xl font-bold">95%</h2>
          <span className="text-base text-zinc-400 tracking-wider">
            Success Rate
          </span>
        </div>
      </div>
    </section>
  );
};
