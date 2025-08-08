import {Card, CardContent, CardFooter} from '@principium/react';
  
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
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm" onClick={() => console.log('item pressed')}>
          <CardContent className="overflow-visible p-0">
            <NextImage
              alt={item.title}
              width={200}
              height={140}
              className="w-full object-cover h-[140px] relative z-10 rounded-b-xl"
              src={item.img}
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


