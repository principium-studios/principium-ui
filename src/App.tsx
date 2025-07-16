import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@principium/alert';
import { Badge } from '@principium/badge';
import { Button } from '@principium/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@principium/card';
import { Divider } from '@principium/divider';
import { cn } from '@principium/shared-utils';
import { Coffee, Moon, Sun } from 'lucide-react';

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
    <div className={cn('flex flex-col gap-6', className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <hr className="border-border" />
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function ButtonDemo() {
  const variants = [
    'solid',
    'shadow',
    'bordered',
    'flat',
    'faded',
    'ghost',
    'light',
  ] as const;
  const colors = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
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
  const variants = ['solid', 'flat', 'faded', 'shadow'] as const;
  const shapes = ['circle', 'rectangle'] as const;
  const sizes = ['sm', 'md', 'lg'] as const;
  const colors = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 1fr))',
          gridAutoRows: 'max-content',
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

function CardDemo() {
  const FruitCardGrid = () => {
    const list = [
      {
        title: 'Orange',
        img: 'https://www.heroui.com/images/fruit-1.jpeg',
        price: '$5.50',
      },
      {
        title: 'Tangerine',
        img: 'https://www.heroui.com/images/fruit-2.jpeg',
        price: '$3.00',
      },
      {
        title: 'Raspberry',
        img: 'https://www.heroui.com/images/fruit-3.jpeg',
        price: '$10.00',
      },
      {
        title: 'Lemon',
        img: 'https://www.heroui.com/images/fruit-4.jpeg',
        price: '$5.30',
      },
      {
        title: 'Avocado',
        img: 'https://www.heroui.com/images/fruit-5.jpeg',
        price: '$15.70',
      },
      {
        title: 'Lemon 2',
        img: 'https://www.heroui.com/images/fruit-6.jpeg',
        price: '$8.00',
      },
      {
        title: 'Banana',
        img: 'https://www.heroui.com/images/fruit-7.jpeg',
        price: '$7.50',
      },
      {
        title: 'Watermelon',
        img: 'https://www.heroui.com/images/fruit-8.jpeg',
        price: '$12.20',
      },
    ];

    return (
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card key={index} isPressable>
            <CardContent className="overflow-visible p-0">
              <img
                alt={item.title}
                className="relative w-full object-cover h-[140px] shadow-lg rounded-lg z-10"
                src={item.img}
                width="100%"
              />
            </CardContent>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <DemoContainer title="Card Variants">
      <Card className="max-w-[400px]" isPressable={true}>
        <CardHeader className="flex gap-3">
          <img
            alt="heroui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            className="rounded-lg w-10 h-10"
          />
          <div className="flex flex-col">
            <CardTitle className="text-md">HeroUI</CardTitle>
            <CardDescription className="text-small text-default-500">
              heroui.com
            </CardDescription>
          </div>
        </CardHeader>
        <Divider />
        <CardContent>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardContent>
        <Divider />
        <CardFooter>
          <a href="https://github.com/rarescovei5/principium">
            Visit source code on GitHub.
          </a>
        </CardFooter>
      </Card>
      <FruitCardGrid />
    </DemoContainer>
  );
}

function AlertDemo() {
  const variants = ['solid', 'bordered', 'flat', 'faded'] as const;
  const colors = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ] as const;
  return (
    <DemoContainer title="Alert Variants">
      {variants.map((variant) =>
        colors.map((color) => (
          <Alert key={variant + color} color={color} variant={variant}>
            <AlertIcon />
            <AlertTitle>Alert</AlertTitle>
            <AlertDescription>
              This is a {variant} variant alert with {color} color
            </AlertDescription>
          </Alert>
        ))
      )}
    </DemoContainer>
  );
}

const Themes = () => {
  const themeOptions = [
    {
      name: 'Light',
      className: 'light',
      icon: <Sun />,
      image:
        'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlnaHQlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Dark',
      className: 'dark',
      icon: <Moon />,
      image:
        'https://img.freepik.com/free-photo/black-smooth-wall-textured-background_53876-124461.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Coffee',
      className: 'coffee',
      icon: <Coffee />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO4TI1FaVtSIrrO9eP-ywv_pEVHopArgzcA&s',
    },
  ];
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 select-none">
      {themeOptions.map((theme) => (
        <Card
          key={theme.name}
          isPressable
          aria-label={`Switch to ${theme.name} theme`}
          onClick={() => {
            document.body.className = theme.className;
          }}
          className="hover:scale-105 hover:outline-2 hover:outline-offset-2 hover:outline-outline-600"
        >
          <CardContent className="relative overflow-hidden p-0 grid place-items-center">
            <img
              alt={`${theme.name} theme preview`}
              className="w-full h-[40px] object-cover rounded-lg opacity-50"
              src={theme.image}
            />
            <span className="absolute z-10 text-xl text-white">{theme.icon}</span>
          </CardContent>
          <CardFooter className="text-sm justify-center">{theme.name}</CardFooter>
        </Card>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col px-60 py-30 gap-30">
      <Themes />
      <ButtonDemo />
      <BadgeDemo />
      <CardDemo />
      <AlertDemo />
    </div>
  );
}

export default App;
