import { ThumbsUp, X } from "lucide-react";
import createTrade from "../utils/createTrade";
import { useCollapseForm } from "../contexts/FormCollapseContext";

export const CreateTradeForm = () => {
  const { isOpen, closeForm } = useCollapseForm();
  console.log(isOpen);

  return (
    <div
      className={`bg-[#101010] ${isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"} transition-all duration-200 h-full w-[80%] fixed top-0 right-0 p-6`}
      style={{ zIndex: 1000 }}
    >
      {/* Header */}
      <header className="flex items-center space-x-8">
        <button
          className="w-10 aspect-square bg-accent rounded-full flex justify-center items-center hover:bg-emerald-400 cursor-pointer hover:scale-110 transition-all"
          onClick={closeForm}
        >
          <X className="w-7 aspect-square text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-white">Create a Barter</h1>
      </header>

      {/* Divider */}
      <div className="border border-zinc-600/50 my-4"></div>

      {/* Create Form */}
      <div className="">
        <form className="flex flex-col space-y-6">
          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              What do you want to learn?
            </label>
            <input
              type="text"
              placeholder="Type receiving skill name"
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              What do you offer?
            </label>
            <input
              type="text"
              placeholder="Type offering skill name"
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              Add skill tags
            </label>
            <input
              type="text"
              placeholder="Eg - Photography, Python, Skateboarding, Guitar lessons"
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              Description
            </label>
            <input
              type="text"
              placeholder="Write your description here"
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              required
            />
          </div>

          <button className="w-[40%] mt-3 px-5 py-2 gap-3 rounded-lg flex items-center justify-center text-white/85 bg-accent/80 text-lg font-bold cursor-pointer hover:bg-accent hover:scale-102 transition-all">
            <span className="mt-1">Done</span>
            <ThumbsUp className="w-5 aspect-square" />
          </button>
        </form>
      </div>
    </div>
  );
};
