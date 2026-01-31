import './App.css';
import { Button } from './components/ui/button.tsx';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './components/ui/navigation-menu.tsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel.tsx';
import { Card, CardContent } from './components/ui/card.tsx';
import Autoplay from 'embla-carousel-autoplay';

const App = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-2xl'>
          Shadcn UI Setup on React Vite Project
        </h1>
        <Carousel className='w-full max-w-48 sm:max-w-xs md:max-w-sm' opts={{
          align: 'start',
          loop: true,
        }} plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
          <CarouselContent className='-ml-1'>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='basis-1/2 pl-1 lg:basis-1/3'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-2xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button>Click Me (From Shadcn UI)</Button>
      </div>
    </>
  );
};

export default App;
