import Link from 'next/link';
import MenuItem from './menu-item';
import MenuTitle from './menu-title';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LightDarkToggle } from '@/components/ui/light-dark-toggle';

export default function MainMenu() {
  return (
    <nav className='bg-muted overflow-auto p-4 flex flex-col'>
      <header className='border-b dark:border-b-black border-b-zinc-300 pb-4'>
        <MenuTitle />
      </header>
      <ul className='py-4 grow'>
        <MenuItem href='/dashboard'>My dashboard</MenuItem>
        <MenuItem href='/dashboard/teams'>Teams</MenuItem>
        <MenuItem href='/dashboard/employees'>Employees</MenuItem>
        <MenuItem href='/dashboard/account'>Account</MenuItem>
        <MenuItem href='/dashboard/settings'>Settings</MenuItem>
      </ul>
      <footer className='flex gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-blue-300 dark:bg-blue-900'>
            GA
          </AvatarFallback>
        </Avatar>
        <Link
          className='underline'
          href='/'
        >
          Logout
        </Link>
        <LightDarkToggle className='ml-auto' />
      </footer>
    </nav>
  );
}
