import {ArrowSquareOutIcon} from '@phosphor-icons/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Divider,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@principium/react';

function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex-row items-center gap-3">
        <Avatar radius="sm">
          <AvatarImage src="/principium-logo.png" />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>Principium UI</CardTitle>
          <CardDescription>principium-studios</CardDescription>
        </div>
      </CardHeader>
      <Divider />
      <CardContent>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardContent>
      <Divider />
      <CardFooter>
        <a
          className="text-primary flex items-center gap-2"
          href="https://github.com/principium-studios/principium"
          rel="noreferrer"
          target="_blank"
        >
          Visit source code on GitHub. <ArrowSquareOutIcon size={16} />
        </a>
      </CardFooter>
    </Card>
  );
}

export default App;
