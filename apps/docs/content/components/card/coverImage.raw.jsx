import {UserIcon} from '@phosphor-icons/react';
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@principium/react';

function App() {
  return (
    <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-2 px-8">
      <Card className="relative col-span-12 h-[300px] overflow-hidden sm:col-span-4">
        <CardHeader className="absolute top-2 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-black/80">What to watch</p>
          <p className="text-large font-medium text-black">Stream the Principium event</p>
        </CardHeader>
        <img
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=1200&auto=format&fit=crop&q=60"
        />
      </Card>
      <Card className="relative col-span-12 h-[300px] overflow-hidden sm:col-span-4">
        <CardHeader className="absolute top-2 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-black/80">Plant a tree</p>
          <p className="text-large font-medium text-black">Contribute to the planet</p>
        </CardHeader>
        <img
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&auto=format&fit=crop&q=60"
        />
      </Card>
      <Card className="relative col-span-12 h-[300px] overflow-hidden sm:col-span-4">
        <CardHeader className="absolute top-2 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-white/80">Supercharged</p>
          <p className="text-large font-medium text-white">Creates beauty like a beast</p>
        </CardHeader>
        <img
          alt="Card background"
          className="z-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=60"
        />
      </Card>
      <Card className="relative col-span-12 h-[300px] w-full overflow-hidden sm:col-span-5">
        <CardHeader className="absolute top-2 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-black/80">2026</p>
          <p className="text-2xl font-medium text-black">Erosion Bird</p>
        </CardHeader>
        <img
          alt="Card example background"
          className="z-0 h-full w-full object-cover"
          src="https://i.kym-cdn.com/entries/icons/mobile/000/046/685/1.jpg"
        />
        <CardFooter blurred className="absolute bottom-0 z-10 justify-between">
          <div>
            <p className="text-tiny text-white">Available soon.</p>
            <p className="text-tiny text-white">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card className="relative col-span-12 h-[300px] w-full overflow-hidden sm:col-span-7">
        <CardHeader className="absolute top-2 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-white/80">Your day your way</p>
          <p className="text-xl font-medium text-white/90">Your checklist for better sleep</p>
        </CardHeader>
        <img
          alt="Relaxing app background"
          className="z-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=60"
        />
        <CardFooter blurred className="absolute bottom-0 z-10 justify-between">
          <div className="flex grow items-center gap-2">
            <Avatar className="rounded-full">
              <AvatarFallback>
                <UserIcon />
              </AvatarFallback>
              <AvatarImage
                alt="Breathing App"
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=120&auto=format&fit=crop&q=60"
              />
            </Avatar>
            <div className="flex flex-col">
              <p className="text-tiny text-white/80">Breathing App</p>
              <p className="text-tiny text-white/80">Get a good night&apos;s sleep.</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
