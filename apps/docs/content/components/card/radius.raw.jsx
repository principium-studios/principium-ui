import { Card, CardHeader, CardTitle, CardContent } from '@principium/react';

function App() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card radius="none">
        <CardHeader>
          <CardTitle className="text-sm">None</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">No radius</p>
        </CardContent>
      </Card>
      <Card radius="sm">
        <CardHeader>
          <CardTitle className="text-sm">Small</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Small radius</p>
        </CardContent>
      </Card>
      <Card radius="md">
        <CardHeader>
          <CardTitle className="text-sm">Medium</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Medium radius</p>
        </CardContent>
      </Card>
      <Card radius="lg">
        <CardHeader>
          <CardTitle className="text-sm">Large</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Large radius</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;