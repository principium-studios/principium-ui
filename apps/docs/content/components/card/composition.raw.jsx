import React from 'react';
import {Card, CardHeader, CardContent, CardFooter, Avatar, AvatarImage, Button, CardTitle, CardDescription} from '@principium/react';

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between flex-row">
        <div className="flex gap-5 items-center">
          <Avatar isBordered radius="full" size="md">
            <AvatarImage src="https://i.pravatar.cc/150?u=zoey" />
          </Avatar>
          <div className="flex flex-col gap-1 items-start justify-center">
            <CardTitle className="text-small font-semibold leading-none text-foreground">Zoey Lang</CardTitle>
            <CardDescription className="text-small tracking-tight text-muted">@zoeylang</CardDescription>
          </div>
        </div>
        <Button
          className={isFollowed ? 'bg-transparent text-foreground border-border' : ''}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardContent className="py-0 text-small text-muted">
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
          <p className="font-semibold text-muted text-small">4</p>
          <p className="text-muted text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-muted text-small">97.1K</p>
          <p className="text-muted text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}


