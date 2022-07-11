import * as React from "react";
import DataTable from "react-data-table-component";

interface NominationsListItemType {
  involvement: number;
  talent: number;
}

interface NominationsListProps {
  items: NominationsListItemType[];
}

const columns = [
  {
    name: "INVOLVEMENT",
    selector: (row: any) => row.involvement,
    sortable: true,
  },
  {
    name: "TALENT",
    selector: (row: any) => row.talent,
    sortable: true,
  },
];

const NominationsList: React.FC<NominationsListProps> = ({ items }) => (
  <div style={{ marginTop: 50 }}>
    <DataTable theme="light" columns={columns} data={items} pagination />
  </div>
);

export { NominationsList };
