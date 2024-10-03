import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertTriangle,
  BadgeCheckIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react';
import Link from 'next/link';

export default function EmployeesStats() {
  const totalEmployees = 100;
  // This is how we can conditionally implement different displaying of icons and text
  const employeesPresent = 80;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card>
        <CardHeader className='pb-2'>
          <CardTitle className='text-base'>Total employees</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <UserIcon />
            <div className='text-5xl font-bold'>{totalEmployees}</div>
          </div>
          <div>
            <Button
              size='xs'
              asChild
            >
              <Link href='/dashboard/employees'>View all</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='pb-2'>
          <CardTitle className='text-base'>Employees present</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex gap-2'>
            {employeesPresentPercentage > 75 ? (
              <UserCheck2Icon />
            ) : (
              <UserRoundXIcon />
            )}

            <div className='text-5xl font-bold'>{employeesPresent}</div>
          </div>
        </CardContent>
        <CardFooter>
          {employeesPresent > 75 ? (
            <span className='text-xs text-green-500 flex gap-1 items-center'>
              <BadgeCheckIcon />
              {employeesPresentPercentage}% of employees are present
            </span>
          ) : (
            <span className='text-xs text-red-500 flex gap-1 items-center'>
              <AlertTriangle />
              Only {employeesPresentPercentage}% of employees are present
            </span>
          )}
        </CardFooter>
      </Card>
      <Card className='border-purple-500'>
        <CardHeader className='pb-2'>
          <CardTitle className='text-base'>Employee of the month</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
