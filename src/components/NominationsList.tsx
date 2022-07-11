import axios from "axios";
import * as React from "react";
import DataTable from "react-data-table-component";
import { nominationsMockdata } from "../data";

const columns = [
  {
    name: "EMAIL",
    selector: (row: Nomination) => row.email,
    sortable: false,
  },
  {
    name: "DESCRIPTION",
    selector: (row: Nomination) => row.description,
    sortable: false,
  },
  {
    name: "INVOLVEMENT",
    selector: (row: Nomination) => row.score.involvement,
    sortable: true,
  },
  {
    name: "TALENT",
    selector: (row: Nomination) => row.score.talent,
    sortable: true,
  },
  {
    name: "STATUS",
    selector: (row: Nomination) => row.status,
    sortable: false,
  },
  {
    name: "DATE",
    selector: (row: Nomination) => row.dateReferred,
    sortable: true,
  },
];

interface NominationsFetchDataResponse {
  data: Nomination[];
  message: string;
}

export interface Nomination {
  id: string; // UUID
  email: string;
  description: string;
  score: {
    involvement: number;
    talent: number;
  };
  referrer: string; // UUID
  dateReferred: string;
  status: "PENDING" | "REJECTED";
}

const NominationsList = () => {
  const [nominations, setNominations] =
    React.useState<Nomination[]>(nominationsMockdata);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchNominationsData = () => {
    axios
      .get<NominationsFetchDataResponse>("/nominations")
      .then((res) => {
        setNominations(res.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        alert(e);
      });
  };

  React.useEffect(() => fetchNominationsData(), []);

  isLoading && <p>Loading data..</p>;

  const filteredNominations = nominations.filter(
    (nomination) => nomination.status !== "REJECTED"
  );

  return (
    <div style={{ marginTop: 50, maxWidth: 500 }}>
      <DataTable
        theme="light"
        columns={columns}
        data={filteredNominations}
        pagination
      />
    </div>
  );
};

export { NominationsList };
