import Button from "@principium/button";
import { cn } from "@principium/shared-utils";

function DemoContainer({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <hr className="border-border" />
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function App() {
  const variants = [
    "solid",
    "shadow",
    "bordered",
    "flat",
    "faded",
    "ghost",
    "light",
  ] as const;
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const;

  return (
    <div className="flex flex-col items-center p-30">
      <DemoContainer title="Variants" className="flex">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-row gap-4">
            {colors.map((color) => (
              <Button key={color} variant={variant} color={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Button>
            ))}
          </div>
        ))}
      </DemoContainer>
    </div>
  );
}

export default App;
