import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@principium/react';

function App() {
  return (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content. You can put any content here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;