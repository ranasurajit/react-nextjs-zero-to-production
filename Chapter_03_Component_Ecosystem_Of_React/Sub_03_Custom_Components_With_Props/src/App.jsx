import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-2xl'>
        React Build UI Cards With Tailwind and React Props
      </h1>
      {/* Template for Card UI */}
      <div className='flex gap-3 flex-wrap justify-around'>
        <Card
          title='Java Course'
          description='Beginner Friendly Java Tutorial'
          imageURL='https://images.pexels.com/photos/11035360/pexels-photo-11035360.jpeg'
          buttonLabel='Grab this Offer!'
        />
        <Card
          title='Python Course'
          description='Fast Forward Python Tutorial'
          imageURL='https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg'
          buttonLabel='Upgrade Now!'
        />
        <Card
          title='Angular Course'
          description='Novice to Pro in Angular'
          imageURL='https://images.pexels.com/photos/11035543/pexels-photo-11035543.jpeg'
          buttonLabel='Learn Now!'
        />
      </div>
    </>
  )
}

export default App;
