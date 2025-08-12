import {Tabs, TabsList, TabsTrigger} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Tabs defaultValue="photos" variant="solid" color="primary" aria-label="Tabs - Solid">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" variant="bordered" color="primary" aria-label="Tabs - Bordered">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="photos" variant="light" color="primary" aria-label="Tabs - Light">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs
        defaultValue="photos"
        variant="underlined"
        color="primary"
        aria-label="Tabs - Underlined"
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
