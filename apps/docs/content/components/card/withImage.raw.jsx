import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@principium/react';

function App() {
  return (
    <Card className="py-4">
      <CardHeader className="items-start gap-0.5 px-4 pb-0 pt-2">
        <p className="text-foreground text-xs font-bold uppercase">Daily Mix</p>
        <CardDescription>12 Tracks</CardDescription>
        <CardTitle className="text-large font-bold">Frontend Radio</CardTitle>
      </CardHeader>
      <CardContent className="overflow-visible py-2">
        <img
          alt="Card artwork"
          className="rounded-xl object-cover"
          height={180}
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=540&auto=format&fit=crop&q=60"
          width={270}
        />
      </CardContent>
    </Card>
  );
}

export default App;
