import { useEffect, useState } from "react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Github, Chrome } from "lucide-react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router";

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await signup(formData);
    navigate("/");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-black min-h-[100vh] max-h-[100vh] px-10 py-6">
        {/* Logo */}
        <div id="logo" className="flex items-center">
          <img src="/logo.png" alt="logo" className="w-8 h-8 aspect-square mr-3" />
          <span className="text-3xl text-white font-bold">Skill</span>
          <span className="text-3xl text-emerald-500 font-bold">Swap</span>
        </div>

        {/* Background */}
        <div id="background">
          <AnimatedBackground />
        </div>

        {/* Form */}
        <div className=" rounded-3xl p-8 transition-all w-[500px] duration-200 absolute top-1/2 left-1/2 -translate-1/2">
          {/* Toggle Buttons */}
          <div className="flex bg-zinc-800/50 rounded-2xl p-1 mb-8 font-bold">
            <button
              className={`px-4 py-3 text-base rounded-xl flex-1 transition-all cursor-pointer ${
                isLogin
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-3 text-base rounded-xl flex-1 transition-all cursor-pointer ${
                isLogin
                  ? "text-zinc-400 hover:text-white"
                  : "bg-emerald-600 text-white shadow-lg"
              }`}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Signup only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                  autoComplete="off"
                  placeholder="Enter you full name"
                  className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                />
              </div>
            )}

            {/* Email field */}
            <div id="email-field">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Email:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="aspect-square w-5 text-zinc-500 " />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                  className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div id="password-field">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Password:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 aspect-square pointer-events-none text-zinc-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  required
                  autoComplete="off"
                  className="w-full pl-12 pr-12 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <div className="flex justify-end">
                <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-medium transition-all flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-[1.02] transform group cursor-pointer"
            >
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
              <ArrowRight className="h-5 w-5 mt-[1.5px] aspect-square group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-zinc-700"></div>
            <span className="px-4 text-zinc-500 text-sm">or continue with</span>
            <div className="flex-1 border-t border-zinc-700"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 py-3 px-4 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-zinc-600 rounded-xl transition-all group">
              <Github className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-medium">
                GitHub
              </span>
            </button>
            <button className="flex items-center justify-center space-x-3 pl-2 pr-3 px-4 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-zinc-600 rounded-xl transition-all group">
              <Chrome className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-zinc-400 group-hover:text-white transition-colors text-sm font-medium">
                Google
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
