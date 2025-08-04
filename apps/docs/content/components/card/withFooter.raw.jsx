import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@principium/react';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Product Card</CardTitle>
          <CardDescription>Premium quality item</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This product offers exceptional value and quality for your needs.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Add to Cart</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Blurred Footer</CardTitle>
          <CardDescription>With backdrop effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a blurred footer that creates a modern glass effect.</p>
        </CardContent>
        <CardFooter isBlurred>
          <Button size="sm" variant="flat">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;