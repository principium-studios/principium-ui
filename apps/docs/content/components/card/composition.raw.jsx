import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Avatar,
  AvatarImage,
  Button,
  CardTitle,
  CardDescription,
} from '@principium/react';

function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="flex-row justify-between">
        <div className="flex items-center gap-5">
          <Avatar isBordered radius="full" size="md">
            <AvatarImage src="https://i.pravatar.cc/150?u=zoey" />
          </Avatar>
          <div className="flex flex-col items-start justify-center gap-1">
            <CardTitle className="text-small text-foreground font-semibold leading-none">
              Zoey Lang
            </CardTitle>
            <CardDescription className="text-small text-muted tracking-tight">
              @zoeylang
            </CardDescription>
          </div>
        </div>
        <Button
          className={isFollowed ? 'text-foreground border-border bg-transparent' : ''}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardContent className="text-small text-muted py-0">
        <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
        <span className="pt-2">
          #FrontendWithZoey
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardContent>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="text-muted text-small font-semibold">4</p>
          <p className="text-muted text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="text-muted text-small font-semibold">97.1K</p>
          <p className="text-muted text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default App;