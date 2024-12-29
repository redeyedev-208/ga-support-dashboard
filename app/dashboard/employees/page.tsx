import { employees } from './employees';
import { setTimeout } from 'timers/promises';

export default async function EmployeesPage() {
  await setTimeout(5000);

  return (
    <div>
      <h2>Employees Page</h2>
    </div>
  );
}
