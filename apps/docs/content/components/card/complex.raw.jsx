import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Avatar } from '@principium/react';

function App() {
  return (
    <div className="max-w-md">
      <Card isPressable isHoverable shadow="lg">
        <CardHeader className="flex gap-3">
          <Avatar 
            src="https://i.pravatar.cc/150?u=user1" 
            size="md"
          />
          <div className="flex flex-col">
            <CardTitle>Jane Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>Passionate about creating beautiful and functional user interfaces. 
             Currently working on modern web applications with React and TypeScript.</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm" variant="flat">
            Follow
          </Button>
          <Button size="sm" variant="bordered">
            Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;