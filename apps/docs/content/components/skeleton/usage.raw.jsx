import {Card, Skeleton} from '@principium/react';

function App() {
  return (
    <div className="flex-1">
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="h-24 rounded-lg" />
        <div className="space-y-3">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
          <Skeleton className="h-3 w-2/5 rounded-lg" />
        </div>
      </Card>
    </div>
  );
}

export default App;
