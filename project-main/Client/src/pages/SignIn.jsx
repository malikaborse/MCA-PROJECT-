import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(StoreContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            return setErrorMessage('Please fill all the fields');
        }
        try {
            setErrorMessage('');
            const res = await fetch('/api/user/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Failed to sign in');
            }
            login(data);
           data?.isSeller ?navigate('/items'):navigate('/interiors');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='min-h-screen mt-10 flex items-center justify-center md:mx-8 md:flex-row flex-col md:gap-10 gap-3'>
            <div className='md:w-[40%] text-center hidden md:block'>
                <Link to='/' className='font-bold text-5xl md:text-6xl' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% rounded-lg inline-block text-transparent bg-clip-text'>Greenskape</span>
                </Link>
                <h3 className="text-lg font-semibold m-4 border-b border-gray-400 pb-2 text-black">
                    We deliver not to "Escape Hunger", but for Flavor not to "Escape Us".
                </h3>
            </div>
            <div className='md:w-[30%] w-[85%]'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>SignIn Page</span>
                    <div>
                        <Label value='Your Username' />
                        <TextInput
                            type='text'
                            placeholder='username'
                            id='username'
                            value={formData.username}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Your Password' />
                        <TextInput
                            type='password'
                            placeholder='********'
                            id='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline type="submit">
                        Sign In
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Dont Have an account?</span>
                    <Link to='/signup' className='text-blue-500'>
                        Sign Up
                    </Link>
                </div>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Forget Password?</span>
                    <Link to='/reset' className='text-blue-500'>
                        Reset
                    </Link>
                </div>
                {errorMessage && (
                    <Alert className="mt-4" color="red">
                        {errorMessage}
                    </Alert>
                )}
            </div>
        </div>
    );
}

export default SignIn;
