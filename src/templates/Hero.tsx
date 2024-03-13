import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <Background color="#FFEFF2">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={
        <div>
          <a className='text-2xl font-bold italic text-[#B76E79]' href="https://app.wedability.com/">Wedability</a>
        </div>
      }>
        <li>
          <Link href="https://app.wedability.com/">
            <Button lg>Log In</Button>
          </Link>
        </li>
        {/* <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'THE PERFECT WAY TO PLAN YOUR WEDDING'}
            {/* <span className="text-primary-500">Before Socially accepted sex</span> */}
          </>
        }
        description="Discover the efficient platform to plan all of your wedding needs"
        button={
          <Link href="https://app.wedability.com/signup">
            <Button xl>Start Planning Today</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
