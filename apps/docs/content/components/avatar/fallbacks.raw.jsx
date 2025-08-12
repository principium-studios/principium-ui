import {Avatar, AvatarFallback, AvatarImage} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex gap-4">
      <Avatar>
        <AvatarImage src="//" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="//" />
        <AvatarFallback>👾</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="//" />
        <AvatarFallback>
          <span className="text-xs">404</span>
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="//" />
        <AvatarFallback>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default App;
