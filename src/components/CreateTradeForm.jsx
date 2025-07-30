import { ThumbsUp, X } from "lucide-react";
import { useCollapseForm } from "../contexts/FormCollapseContext";
import { useState } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import createTrade from "../utils/createTrade";

export const CreateTradeForm = () => {
  const { isOpen, closeForm } = useCollapseForm();
  const [formData, setFormData] = useState({
    skillOffered: "",
    skillDesired: "",
    skillTags: "",
    description: "",
    timeInvestment: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await createTrade(formData);

      if (error) console.log(error);
      else console.log("Skill posted: ", data);
    } catch (error) {
      console.error("create trade form error: ", error);
    } finally {
      setFormData({
        skillOffered: "",
        skillDesired: "",
        skillTags: "",
        description: "",
        timeInvestment: "",
      });
    }
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`bg-[#101010] ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-full opacity-0 pointer-events-none"
      } transition-all duration-200 h-full w-[80%] fixed top-0 right-0 p-8 overflow-y-scroll overflow-x-hidden`}
      style={{ zIndex: 1000 }}
    >
      <AnimatedBackground />

      {/* Header */}
      <header className="flex items-center space-x-8">
        <button
          className="w-10 aspect-square bg-accent rounded-full flex justify-center items-center hover:bg-emerald-400 cursor-pointer hover:scale-110 transition-all"
          onClick={closeForm}
        >
          <X className="w-7 aspect-square text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-white">Post a skill offer</h1>
      </header>

      {/* Divider */}
      <div className="border border-zinc-600/50 my-4"></div>

      {/* Create Form */}
      <div className="">
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              What do you want to learn?
            </label>
            <input
              type="text"
              name="skillDesired"
              placeholder="Type receiving skill name"
              value={formData.skillDesired}
              onChange={handleInputChange}
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              What do you offer?
            </label>
            <input
              type="text"
              name="skillOffered"
              value={formData.skillOffered}
              placeholder="Type offering skill name"
              onChange={handleInputChange}
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              Add skill tags
            </label>
            <input
              type="text"
              name="skillTags"
              value={formData.skillTags}
              placeholder="Eg - Photography, Python, Skateboarding, Guitar lessons"
              onChange={handleInputChange}
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Write your description here"
              onChange={handleInputChange}
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-accent/85 font-semibold text-base">
              Time Investment
            </label>
            <input
              type="text"
              name="timeInvestment"
              value={formData.timeInvestment}
              placeholder="Time you are willing to invest on this skill"
              onChange={handleInputChange}
              className="px-6 py-3 bg-primary-dark/65 rounded-lg placeholder:text-white/30 placeholder:text-sm font-light w-[80%] text-white/50 text-sm outline-none"
              autoComplete="off"
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
