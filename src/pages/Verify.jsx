import { useEffect } from 'react';
import {AnimatedBackground} from '../components/AnimatedBackground';
import { useNavigate } from 'react-router';
import supabase from '../db/supabase';
import { useAuth } from '../hooks/useAuth';

export const Verify = () => {
    const navigate = useNavigate();
    const { dispatch } = useAuth();
    
    useEffect(() => {
        async function handleConfirm() {
            const { data, error } = await supabase.auth.getSession();

            if(error) throw new Error(error);
            if(!data.session) navigate("/login");

            console.log(data?.session);
            dispatch({ type: 'SET_USER', payload: data?.session?.user })
            navigate("/");
        }

        handleConfirm();
    }, [])
  return (
    <div className='bg-black max-h-screen max-w-screen'>
        <AnimatedBackground />

        <h3>Please wait while we verify your email...</h3>
    </div>
  )
};