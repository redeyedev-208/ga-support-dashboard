import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { employees } from './employees';
import { setTimeout } from 'timers/promises';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';

export default async function EmployeesPage() {
  await setTimeout(3000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          data={employees}
          columns={columns}
        />
      </CardContent>
    </Card>
  );
}
