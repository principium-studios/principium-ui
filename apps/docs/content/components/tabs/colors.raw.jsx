import {Tabs, TabsList, TabsTrigger} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Tabs defaultValue="photos" color="default" aria-label="Tabs - Default color">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" color="primary" aria-label="Tabs - Primary color">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" color="secondary" aria-label="Tabs - Secondary color">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" color="success" aria-label="Tabs - Success color">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" color="warning" aria-label="Tabs - Warning color">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" color="danger" aria-label="Tabs - Danger color">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export default App;
