import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecksIcon, PieChart, Star, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import cm from '@/public/images/cm.jpg';
import { teamLeaders } from './teamLeaders';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TeamDistributionChart from '../../teams/team-distribution-chart';

export default function TeamStats() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Total teams</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UsersIcon />
              <div className='text-5xl font-bold'>8</div>
            </div>
            <div>
              <Button
                size='xs'
                asChild
              >
                <Link href='/dashboard/teams'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between'>
              <span>Team leaders</span>
              <Star className='text-yellow-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between'>
              <span>Team distribution</span>
              <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      {/* Bar Chart Code  */}
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>line graph</CardContent>
      </Card>
    </>
  );
}
