'use client';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';

type Props = {
  className?: string;
};

export function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          aria-label='light dark toggle button'
          className={className}
          onClick={() => {
            setIsDarkMode((prevValue) => !prevValue);
            // This is the way we do it in here due to the server side component Workflow
            // Alternatively you can use context but that really is some wack shit honestly
            // Such a waste of time setting up context for a simple toggle so push back on people
            // When they come at you with that wackness
            document.body.classList.toggle('dark');
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
