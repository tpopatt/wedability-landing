import Image from 'next/image';

// import { Section } from '@/layout/Section';

const Sponsors = () => (
    <Image
        src="/assets/images/better-stack-dark.png"
      alt="Better Stack"
      width={2900}
      height={2290}
      className='rounded-lg px-4 md:px-32'
      style={{
        // shadow on all four sides
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}
    />
);

export { Sponsors };
