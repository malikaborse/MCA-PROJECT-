import { Alert, Button, Label, Spinner, TextInput, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.username || !formData.email || !formData.password || !formData.name) {
            return setErrorMessage('Please fill out all fields..');
        }
        try {
            setErrorMessage(null);
            const res = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                return setErrorMessage(data.message);
            }
            if (res.ok) {
                navigate('/signin');
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='min-h-screen mt-10 flex items-center justify-center md:mx-8 md:flex-row flex-col md:gap-10 gap-3'>
            <div className='md:w-[40%] text-center hidden md:block'>
                <Link to='/' className='font-bold text-5xl md:text-6xl' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1 bg-gradient-to-r from-teal-700 from-30% via-sky-500 via-50% to-emerald-700 to-90% rounded-lg inline-block text-transparent bg-clip-text'>Greenskape</span>
                </Link>
                <h3 className="text-lg font-semibold m-4 border-b border-gray-400 pb-2 text-black">
                    ____  Simple but signifecunt  ____
                </h3>
            </div>
            <div className='md:w-[30%] w-[85%]'>
                <form className='flex flex-col gap-4'>
                    <span className='px-2 py-1 text-black rounded-lg inline-block font-bold text-5xl md:text-4xl text-center mb-5' style={{ fontVariant: 'petite-caps' }}>SignUp Page</span>
                    <div>
                        <Label value='Your email' />
                        <TextInput
                            type='email'
                            placeholder='name@company.com'
                            id='email'
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
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Your Full Name' />
                        <TextInput
                            type='text'
                            placeholder='Xyz Abc'
                            id='name'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <div className='gap-2'>
                        <Label value='Your Username' />
                        <TextInput
                            type='text'
                            placeholder='xyz_abc'
                            id='username'
                            onChange={handleChange}
                            className='mt-2'
                        />
                    </div>
                    <Button gradientDuoTone="purpleToPink" outline onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </form>
                <div className='flex gap-2 text-sm font-mono font-semibold mt-5 justify-center'>
                    <span>Have an account?</span>
                    <Link to='/signin' className='text-blue-500'>
                        Sign In
                    </Link>
                </div>
                {errorMessage && (
                    <Alert className='mt-5 self-center' severity="error">
                        {errorMessage}
                    </Alert>)
                }
            </div>
        </div>
    );
}

export default SignUp;