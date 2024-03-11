import Image from 'next/image';

// import { Section } from '@/layout/Section';

const Sponsors = () => (
    <Image
        src="/assets/images/better-stack-dark.png"
      alt="Better Stack"
      width={2900}
      height={2290}
      className='rounded-lg px-4'
      style={{
        // shadow in all directions
        boxShadow: '10px 10px rgba(0, 0, 0, 0.1)',
      }}
    />
);

export { Sponsors };
