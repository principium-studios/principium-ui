import Badge from "@principium/badge";
import Button from "@principium/button";
import { cn } from "@principium/shared-utils";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

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

function ButtonDemo() {
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
    <DemoContainer title="Button Variants" className="flex">
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
  );
}

function BadgeDemo() {
  const variants = ["solid", "flat", "faded", "shadow"] as const;
  const shapes = ["circle", "rectangle"] as const;
  const sizes = ["sm", "md", "lg"] as const;
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const;

  const Avatar = () => {
    return (
      <img
        src="https://i.pinimg.com/236x/bb/df/ec/bbdfecbe813809bf72def9772538e323.jpg"
        alt=""
      />
    );
  };

  return (
    <DemoContainer title="Badge Variants" className="flex w-full">
      {/* Every possible combination */}
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(30px, 1fr))",
          gridAutoRows: "max-content",
        }}
        className="grid gap-4"
      >
        {variants.map((variant) =>
          colors.map((color) =>
            sizes.map((size) =>
              shapes.map((shape) => (
                <Badge
                  key={variant + color + size + shape}
                  variant={variant}
                  color={color}
                  size={size}
                  shape={shape}
                  content="2"
                >
                  <Avatar />
                </Badge>
              ))
            )
          )
        )}
      </div>
    </DemoContainer>
  );
}

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  return (
    <Button
      size="icon"
      onClick={() => {
        setDark(!dark);
        document.body.classList.toggle("dark");
      }}
      className="fixed top-5 right-5 z-50"
    >
      {dark ? <Moon /> : <Sun />}
    </Button>
  );
};

function App() {
  return (
    <div className="flex flex-col p-30 gap-30">
      <ThemeToggle />
      <ButtonDemo />
      <BadgeDemo />
    </div>
  );
}

export default App;
