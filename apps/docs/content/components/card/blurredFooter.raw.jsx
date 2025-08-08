import {Card, CardFooter, Button} from '@principium/react';

function App() {
  return (
    <Card radius="lg">
      <img
        alt="Person listening to music"
        className="object-cover h-50"
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60"
      />
      <CardFooter
        className="absolute bottom-1 mx-1 w-[calc(100%_-_8px)] justify-between rounded-lg border border-border/10"
        isBlurred
      >
        <p className="text-xs text-white">Available soon.</p>
        <Button className="text-xs text-white" color="default" radius="lg" size="sm" variant="flat">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}

export default App;
