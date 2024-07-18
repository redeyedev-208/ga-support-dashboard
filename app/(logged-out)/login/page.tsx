'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <h1 className='sr-only'>Heading One for accessibility</h1>{' '}
      {/* Screen reader-only heading */}
      <h2 className='sr-only'>Heading Two for accessibility</h2>{' '}
      {/* Screen reader-only heading */}
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your Support Dashboard Account
          </CardDescription>
        </CardHeader>
        <CardContent>Login form</CardContent>
        <CardFooter className='justify-between'>
          <small>Don't have an account?</small>
          <Button
            asChild
            variant='outline'
            size='sm'
          >
            <Link href='/sign-up'>Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
