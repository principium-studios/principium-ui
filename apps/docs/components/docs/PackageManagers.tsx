import {ClipboardIcon} from '@phosphor-icons/react/dist/ssr';
import {Button, Tabs, TabsContent, TabsList, TabsTrigger} from '@principium/react';

interface PackageManagersProps {
  packageName: string;
}

const InstallBlock = ({
  manager,
  command,
  packageName,
}: {
  manager: string;
  command: string;
  packageName: string;
}) => {
  return (
    <pre className="bg-border-100 relative rounded-lg px-4 py-2">
      <code>
        {manager} <span className="text-primary-400 dark:text-primary-600">{command}</span>{' '}
        @principium/{packageName}
      </code>
      <Button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        size="icon"
        variant="light"
        onClick={() => {
          navigator.clipboard.writeText(manager + ' ' + command + ' @principium/' + packageName);
        }}
      >
        <ClipboardIcon size={16} />
      </Button>
    </pre>
  );
};

const PackageManagers = ({packageName}: PackageManagersProps) => {
  return (
    <div className="not-prose flex flex-col gap-2">
      <Tabs variant="underlined" defaultValue="npm">
        <TabsList className="w-fit">
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        </TabsList>
        <TabsContent value="npm">
          <InstallBlock manager="npm" command="install" packageName={packageName} />
        </TabsContent>
        <TabsContent value="yarn">
          <InstallBlock manager="yarn" command="add" packageName={packageName} />
        </TabsContent>
        <TabsContent value="pnpm">
          <InstallBlock manager="pnpm" command="add" packageName={packageName} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PackageManagers;
