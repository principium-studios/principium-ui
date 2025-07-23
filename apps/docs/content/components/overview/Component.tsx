import {Card, CardHeader, CardTitle, CardContent, Divider} from '@principium/react';
import Image from 'next/image';

export default function OverviewComponent({title, img}: {title: string, img: string}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Divider />
      <CardContent className='items-center justify-center'>
        <Image src={img} alt={title} width={100} height={100} />
      </CardContent>
    </Card>
  );
}
