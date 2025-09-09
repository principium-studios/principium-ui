import {Tabs, TabsList, TabsTrigger} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Tabs aria-label="Tabs - Solid" color="primary" defaultValue="photos" variant="solid">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Bordered" color="primary" defaultValue="photos" variant="bordered">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs aria-label="Tabs - Light" color="primary" defaultValue="photos" variant="light">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs
        aria-label="Tabs - Underlined"
        color="primary"
        defaultValue="photos"
        variant="underlined"
      >
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
