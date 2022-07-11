import DataTable, { TableColumn } from "react-data-table-component";

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  theme?: string;
  pagination?: boolean;
}

const Table: <T>(props: TableProps<T>) => JSX.Element = ({
  columns,
  data,
  theme,
  pagination,
}) => (
  <DataTable
    theme={theme}
    columns={columns}
    data={data}
    pagination={pagination}
  />
);

export { Table };
