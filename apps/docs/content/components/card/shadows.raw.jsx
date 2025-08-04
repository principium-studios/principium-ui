import { Card, CardHeader, CardTitle, CardContent } from '@principium/react';

function App() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card shadow="none">
        <CardHeader>
          <CardTitle className="text-sm">None</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">No shadow</p>
        </CardContent>
      </Card>
      <Card shadow="sm">
        <CardHeader>
          <CardTitle className="text-sm">Small</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Small shadow</p>
        </CardContent>
      </Card>
      <Card shadow="md">
        <CardHeader>
          <CardTitle className="text-sm">Medium</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Medium shadow</p>
        </CardContent>
      </Card>
      <Card shadow="lg">
        <CardHeader>
          <CardTitle className="text-sm">Large</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Large shadow</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;