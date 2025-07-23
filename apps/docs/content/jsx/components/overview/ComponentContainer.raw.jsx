import Image from 'next/image';
import {Card, CardTitle, CardHeader, CardContent, Divider} from '@principium/react';

export default function ComponentContainer({title, img}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Divider />
      <CardContent className="items-center justify-center">
        <Image src={img} alt={title} width={100} height={100} />
      </CardContent>
    </Card>
  );
}
