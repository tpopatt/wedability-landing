import Image from 'next/image';

// import { Section } from '@/layout/Section';

const Sponsors = () => (
    <div className='flex flex-row items-center justify-center'>
      <Image
          src="/assets/images/better-stack-dark.png"
        alt="Better Stack"
        width={2900}
        height={2290}
        className='w-4/5 rounded-lg shadow-image-shadow'
      />
    </div>
);

export { Sponsors };
