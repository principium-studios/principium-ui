import {Card, CardContent, CardFooter, Image} from '@principium/react';

export default function App() {
  const list = [
    {title: 'Lemon', img: '/fruits/lemon.jpg', price: '$5.50'},
    {title: 'Tangerine', img: '/fruits/tangerine.jpg', price: '$3.00'},
    {title: 'Raspberry', img: '/fruits/raspberry.jpg', price: '$10.00'},
    {title: 'Avocado', img: '/fruits/avocado.jpg', price: '$15.70'},
    {title: 'Blueberries', img: '/fruits/blueberries.jpg', price: '$8.00'},
    {title: 'Banana', img: '/fruits/banana.jpg', price: '$7.50'},
    {title: 'Watermelon', img: '/fruits/watermelon.jpg', price: '$12.20'},
    {title: 'Coconut', img: '/fruits/coconut.jpg', price: '$4.50'},
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm">
          <CardContent className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="relative z-10 h-[140px] w-full rounded-b-xl object-cover"
              height={140}
              src={item.img}
              width={200}
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
}
