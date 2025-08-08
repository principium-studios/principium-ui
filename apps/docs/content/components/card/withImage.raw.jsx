import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@principium/react';

function App() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 items-start gap-0.5">
        <p className="text-xs uppercase font-bold text-foreground">Daily Mix</p>
        <CardDescription>12 Tracks</CardDescription>
        <CardTitle className="font-bold text-large">Frontend Radio</CardTitle>
      </CardHeader>
      <CardContent className="overflow-visible py-2">
        <img
          alt="Card artwork"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=540&auto=format&fit=crop&q=60"
          width={270}
          height={180}
        />
      </CardContent>
    </Card>
  );
}

export default App;


