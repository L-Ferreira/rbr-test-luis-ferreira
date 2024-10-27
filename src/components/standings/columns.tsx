import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';
import { DriverStanding } from 'src/services/api/types';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { FLAGS } from '@/lib/country-flags';

export type CustomColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  customHeaderClassName?: string;
  customCellClassName?: string;
};

const SortButton = ({ column, children }: { column: any; children: React.ReactNode }) => {
  const isSorted = column.getIsSorted();

  return (
    <Button
      variant="ghost"
      className={`hover:bg-transparent hover:text-white group ${
        isSorted ? 'text-white' : 'text-redbull-grey'
      } font-bold transition-colors`}
      onClick={() => column.toggleSorting()}
    >
      {children}
      <div className="ml-2">
        {isSorted === 'asc' && <ArrowUp className="h-4 w-4" />}
        {isSorted === 'desc' && <ArrowDown className="h-4 w-4" />}
        {!isSorted && (
          <ArrowUpDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity font-" />
        )}
      </div>
    </Button>
  );
};

export const columns: CustomColumnDef<DriverStanding>[] = [
  {
    accessorKey: 'position',
    header: ({ column }) => <SortButton column={column}>Position</SortButton>,
    customCellClassName: 'text-lg font-bold ',
  },
  {
    accessorKey: 'driverName',
    header: ({ column }) => <SortButton column={column}>Driver Name</SortButton>,
    customCellClassName: 'text-lg  ',
  },
  {
    accessorKey: 'driverCountry',
    header: ({ column }) => <SortButton column={column}>Nationality</SortButton>,

    cell: ({ row }) => {
      const nationality = row.original.driverCountry;
      return (
        <div className="flex items-center gap-2">
          {FLAGS[nationality] && (
            <Image
              src={FLAGS[nationality]}
              width="20"
              height="15"
              alt={nationality}
              className="object-contain"
            />
          )}
          {nationality}
        </div>
      );
    },
    customHeaderClassName: 'ml-2',
    customCellClassName: 'font-thin',
  },
  {
    accessorKey: 'constructorName',
    header: ({ column }) => <SortButton column={column}>Constructor</SortButton>,
    customCellClassName: 'font-thin',
  },
  {
    accessorKey: 'totalPoints',
    header: ({ column }) => <SortButton column={column}>Total Points</SortButton>,
    customCellClassName: 'text-lg font-bold ',
  },
];