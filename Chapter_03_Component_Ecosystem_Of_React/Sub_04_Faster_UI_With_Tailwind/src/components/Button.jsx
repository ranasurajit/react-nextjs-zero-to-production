const Button = ({ buttonLabel = 'Buy Now!' }) => {
    return (
        <button className='mt-4 px-4 bg-blue-600 hover:bg-blue-400 rounded-lg text-white font-bold py-2'>{buttonLabel}</button>
    );
};

export default Button;
