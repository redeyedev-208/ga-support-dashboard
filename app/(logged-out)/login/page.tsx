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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Zod does all of the heavy lifting for validation cool stuff
const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Logged in successful, after validation was successful');
    router.push('/dashboard');
  };

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
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-6'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              {/* This uses React context this is pretty slick I must admit */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='coffeelover@coffee.com'
                        // Comment out the type and type the validation color contrast
                        // You will see that the color for the light mode passes the accessibility color contrast requirement
                        // In dark mode though this is not the case so change the color in the globals.css file until it passes
                        type='email'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Email address you signed up with
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder='********'
                        // Comment out the type and type the validation color contrast
                        // You will see that the color for the light mode passes the accessibility color contrast requirement
                        // In dark mode though this is not the case so change the color in the globals.css file until it passes
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Login</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='justify-between'>
          <small>Don&apos;t have an account?</small>
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
