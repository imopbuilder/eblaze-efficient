import { Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from '@react-email/components';

interface RegistrationSuccessProps {
  name: string;
  events: { name: string; description: string }[];
  registrationId: string;
}

export const RegistrationSuccess = ({
  name = 'Op Candidate',
  events = [
    { name: 'Eblaze', description: 'Join Our Electrifying Lineup of Events and Gatherings.' },
    { name: 'Eblaze', description: 'Join Our Electrifying Lineup of Events and Gatherings.' },
  ],
  registrationId = 'your_registration_id',
}: RegistrationSuccessProps) => {
  const previewText = `Hello, ${name}, Join Eblaze at SVUCE`;

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
                  foreground: '#737373',
                },
              },
            },
          },
        }}
      >
        <Body className='bg-background my-auto mx-auto font-sans p-5'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-5 w-[465px]'>
            <Section className='mt-0 bg-primary-color rounded-sm py-14 flex items-center justify-center'>
              <Img
                src={'https://utfs.io/f/8b0bb9fa-32d3-4333-8ebc-eb500b57113b-1zbfv.png'}
                width='40'
                height='37'
                alt='Vercel'
                className='my-0 mx-auto inline-block'
              />
              <Img
                src={'https://utfs.io/f/40c33658-aee9-4330-9669-b2d3a6a80ccf-4illvf.jpg'}
                width='40'
                height='37'
                alt='Vercel'
                className='my-0 mx-auto inline-block ml-5'
              />
            </Section>
            <Heading className='text-foreground text-[24px] font-semibold text-center p-0 my-[30px] mx-0'>Eblaze invites you</Heading>
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
            <Heading className='text-foreground text-base font-semibold text-left p-0 mt-2 mx-0'>Events details</Heading>
            {events.map((val, index) => (
              <Text className='text-muted-foreground list-none text-sm px-2'>
                <span className=''>{val.name}</span>
                <span className={`inline-block pl-5 ${index === events.length - 1 ? 'pb-0' : 'pb-2'}`}>{val.description}</span>
              </Text>
            ))}
            <Text className='text-foreground text-[14px] leading-[24px]'>
              Your participation promises to enrich our workshop with diverse perspectives and insights. We believe that your presence will contribute
              significantly to the learning experience.
            </Text>
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
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
            <Text className='text-muted-foreground text-[12px] leading-[24px]'>
              Thank you for choosing to participate in our workshop. We're excited to have you join us! For more updates and information about our
              future events, please stay connected with us on our social media platforms.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default RegistrationSuccess;
