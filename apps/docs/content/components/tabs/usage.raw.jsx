import {Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent} from '@principium/react';

function App() {
  return (
    <div className="flex w-full flex-1 flex-col gap-4">
      <Tabs aria-label="Options" defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <Card>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="music">
          <Card>
            <CardContent>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="videos">
          <Card>
            <CardContent>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
