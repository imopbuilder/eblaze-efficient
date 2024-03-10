import { Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from '@react-email/components';
import { Fragment } from 'react';

interface RegistrationSuccessProps {
  name: string;
  events: { name: string }[];
  registrationId: string;
  sessionId?: string;
  pack: string;
  description: string | undefined;
}

export function RegistrationSuccess({ name, events, registrationId, sessionId, pack, description }: RegistrationSuccessProps) {
  const previewText = `Hello, ${name}, Join Eblaze at SVUCE`;
  const invoice = `${
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_BASE_URL
  }/users/registration/success?session_id=${sessionId}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: '#fffff5',
                foreground: '#0a0a0a',
                primary: {
                  color: '#fd6317',
                },
                muted: {
                  DEFAULT: '#FFFFD1',
                  foreground: '#737373',
                },
              },
            },
          },
        }}
      >
        <Body className='bg-background my-auto mx-auto font-sans'>
          <Container className='my-[40px] mx-auto p-5 w-[465px]'>
            <Section className='text-center mt-8'>
              <Img
                src={'https://utfs.io/f/8b0bb9fa-32d3-4333-8ebc-eb500b57113b-1zbfv.png'}
                width='40'
                height='40'
                alt='Vercel'
                className='my-0 mx-auto inline-block'
              />
              <Img
                src={'https://utfs.io/f/40c33658-aee9-4330-9669-b2d3a6a80ccf-4illvf.jpg'}
                width='40'
                height='40'
                alt='Vercel'
                className='my-0 mx-auto inline-block ml-5 rounded-sm'
              />
            </Section>
            <Heading className='text-foreground text-[24px] font-bold text-center p-0 mb-8 mt-10 mx-0'>
              Eblaze invites you to {pack} events {pack === 'Workshop' ? '🎊' : '🎉'}
            </Heading>
            <Img
              src={'https://utfs.io/f/61e12242-55a0-4b91-84d0-9db1426b4ee9-ola4oy.png'}
              className='w-full inline-block h-auto'
              width='40'
              height='40'
              alt='success-img'
            />
            <Text className='text-foreground text-[14px] leading-[24px]'>
              Hello <span className='font-medium'>{name}</span>,
            </Text>
            <Text className='text-foreground text-[14px] leading-[24px]'>
              We are thrilled to inform you that your registration with registration id <span className='font-medium'>{registrationId}</span> for the
              upcoming{' '}
              <Link href={'https://eblaze.vercel.app'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Eblaze
              </Link>{' '}
              workshop has been successfully processed. Congratulations on securing your spot!
            </Text>
            <Heading className='text-foreground text-base font-semibold text-left p-0 mt-2 mx-0' mb='4'>
              {pack} Event details
            </Heading>
            {events.map((val, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Text key={index} className='text-sm px-3 m-0'>
                <span className=''>{index + 1}. </span>
                <span className={`inline-block ${index === events.length - 1 ? 'pb-0' : 'pb-2'}`}>{val.name}</span>
                {description ? (
                  <Fragment>
                    <span className='text-muted-foreground text-xs'>
                      <span className='inline-block px-3 text-muted-foreground text-sm'>-</span>
                      {description}
                    </span>
                  </Fragment>
                ) : (
                  ''
                )}
              </Text>
            ))}
            <Text className='text-foreground text-[14px] leading-[24px]'>
              Your participation promises to enrich our workshop with diverse perspectives and insights. We believe that your presence will contribute
              significantly to the learning experience.
            </Text>
            <Link href={invoice} className='bg-foreground text-background rounded-full w-full inline-block py-3 text-sm text-center mt-2 mb-1'>
              Download Invoice
            </Link>
            <Text className='text-foreground text-[14px] leading-[24px]'>
              or copy and paste this URL into your browser:{' '}
              <Link href={invoice} className='text-primary-color no-underline'>
                {invoice}
              </Link>
            </Text>
            <Hr className='border border-solid border-muted mt-[24px] mb-4 mx-0 w-full' />
            <Text className='text-foreground text-[14px] leading-[24px]'>
              Should you have any questions or require further information about the workshop, feel free to reach out to us at{' '}
              <Link href='https://eblaze.vercel.app/contact' className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Contact Us
              </Link>
            </Text>
            <Text className='text-foreground text-[14px] leading-[24px]'>
              Once again, congratulations on your successful registration. We look forward to welcoming you to the Eblaze workshop and witnessing the
              valuable contributions you will bring.
            </Text>
            <Text className='text-foreground text-[14px] leading-[24px]'>
              Best regards, <span className='font-medium'>Eblaze team</span>
            </Text>
            <Hr className='border border-solid border-muted my-[26px] mx-0 w-full' />
            <Text className='text-muted-foreground text-[12px] leading-[24px]'>
              Thank you for choosing to participate in our workshop. We're excited to have you join us! For more updates and information about our
              future events, please stay connected with us on our social media platforms.
            </Text>
            <Hr className='border-b-4 border-dotted border-b-primary-color border-x-0 border-t-0 mt-[24px] mb-4 mx-0 w-full' />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
