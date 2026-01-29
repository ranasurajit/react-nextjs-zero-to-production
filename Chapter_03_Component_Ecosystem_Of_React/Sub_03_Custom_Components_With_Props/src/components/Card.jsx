import Button from "./Button";

const Card = ({
    title = 'Yet to Reveal!',
    description = 'Lorem ipsum dolor sit amet',
    imageURL = 'https://images.pexels.com/photos/35742275/pexels-photo-35742275.jpeg',
    buttonLabel = 'Buy Now!'
}) => {
    return (
        <div className='max-w-sm bg-white border border-gray-200 
        rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
            <img className='w-full h-48 object-cover' src={imageURL} alt='Sample Image' />
            <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
                <p className='mt-2 text-gray-600 text-sm'>{description}</p>
                <Button buttonLabel={buttonLabel} />
            </div>
        </div>
    );
};

export default Card;
