import {Tabs, TabsList, TabsTrigger} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Tabs aria-label="Tabs - Default color" color="default" defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Primary color" color="primary" defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Secondary color" color="secondary" defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Success color" color="success" defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Warning color" color="warning" defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Danger color" color="danger" defaultValue="photos">
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
