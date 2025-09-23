import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const lowerUser = userName.toLowerCase();
        const lowerPass = password.toLowerCase();

        // Example simple auth check
        if (
            (lowerUser === 'shoaib' || lowerUser === 'sufiya') &&
            (lowerPass === 'shoaib' || lowerPass === 'sufiya')
        ) {
            window.open('https://kabooteri.netlify.app/', '_blank');
        } else {
            alert('Invalid Username or Password');
        }
    };

    return (
        <section className="w-full md:w-96 h-screen px-6 flex flex-col md:bg-slate-100 bg-slate-50 gap-8 py-20">
            {/* Heading */}
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold text-slate-950 text-center">
                    Welcome Back
                </h1>
                <p className="text-center text-slate-500">Sign in to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                {/* Username */}
                <div className="w-full flex items-center h-12 shadow rounded-lg bg-white text-black font-semibold px-4 gap-4">
                    <FaUser size={19} />
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full h-12 outline-none border-none bg-transparent"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        required
                    />
                </div>

                {/* Password */}
                <div className="w-full flex items-center h-12 shadow rounded-lg bg-white text-black font-semibold px-4 gap-4">
                    <RiLockPasswordFill size={24} />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 outline-none border-none bg-transparent"
                        type="password"
                        placeholder="Password"
                        value={password}
                        required
                    />
                </div>

                {/* Options */}
                <div className="w-full flex justify-between items-center">
                    <label className="flex gap-2 items-center cursor-pointer">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-slate-500 font-medium">Remember Me</span>
                    </label>
                    <p className="text-blue-500 font-medium cursor-pointer">
                        Forgot Password?
                    </p>
                </div>

                {/* Submit */}
                <button
                    className="w-1/2 h-12 text-white rounded-xl font-bold bg-red-600 active:bg-emerald-500 active:scale-95 transition-all duration-300"
                    type="submit"
                >
                    Login
                </button>
            </form>

            {/* Divider */}
            <div className="w-full flex items-center justify-center gap-4">
                <p className="w-full border border-slate-500"></p>
                <p className="w-full text-slate-600 text-center">or continue with</p>
                <p className="w-full border border-slate-500"></p>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 w-full">
                <button className="flex justify-center items-center gap-2 h-12 bg-white border border-gray-300 rounded-xl shadow font-bold active:scale-95 transition-all duration-300 text-black">
                    <FcGoogle size={20} />
                    Google
                </button>

                <button className="flex justify-center items-center gap-2 h-12 bg-blue-600 rounded-xl shadow text-white font-bold active:scale-95 transition-all duration-300">
                    <FaFacebook size={20} />
                    Facebook
                </button>
            </div>

            {/* Signup */}
            <div className="w-full flex items-center justify-center gap-1">
                <p className="text-slate-600 font-medium">Don't have an account?</p>
                <p className="text-blue-500 font-medium cursor-pointer">Sign Up</p>
            </div>
        </section>
    );
}

export default LoginPage