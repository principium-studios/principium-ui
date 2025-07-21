import {Card, CardTitle, CardHeader, CardContent} from '@principium/react';
import * as motion from 'motion/react-client';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeaturesGrid = ({features}: {features: Feature[]}) => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {features.map((feature, idx) => (
        <Card key={feature.title} asChild isBlurred>
          <motion.div
            initial={{opacity: 0, y: 10, scale: 0.75}}
            transition={{duration: 0.5, delay: idx * 0.25}}
            viewport={{once: true}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
          >
            <CardHeader className="gap-2 pb-1">
              <div className="bg-secondary-100 flex items-center justify-center rounded-full p-2">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-background-600 text-sm">{feature.description}</CardContent>
          </motion.div>
        </Card>
      ))}
    </section>
  );
};

export default FeaturesGrid;
