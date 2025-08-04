import { Card, CardHeader, CardTitle, CardContent } from '@principium/react';

function App() {
  return (
    <div 
      className="relative p-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="22" cy="22" r="6"/%3E%3Ccircle cx="38" cy="38" r="12"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Regular Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a regular card with solid background.</p>
          </CardContent>
        </Card>
        <Card isBlurred>
          <CardHeader>
            <CardTitle>Blurred Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card has a blurred glass effect.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;