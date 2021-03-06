import axios, { AxiosError } from "axios";
import * as React from "react";
import { novaApi } from "../api/nova-api";
import { nominationsMockdata } from "../data";
import { WithLoading } from "../hoc/WithLoading";
import { Table } from "../ui-components/Table";

const columns = [
  {
    name: "EMAIL",
    selector: (row: Nomination) => row.email,
    sortable: false,
    wrap: true,
    width: "200px",
  },
  {
    name: "DESCRIPTION",
    selector: (row: Nomination) => row.description,
    sortable: false,
    wrap: true,
    width: "200px",
  },
  {
    name: "INVOLVEMENT",
    selector: (row: Nomination) => row.score.involvement,
    sortable: true,
    width: "140px",
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
    wrap: true,
  },
  {
    name: "DATE",
    selector: (row: Nomination) => row.dateReferred,
    sortable: false,
    wrap: true,
    width: "250px",
  },
];

interface NominationsFetchDataResponse {
  data: Nomination[];
  message: string;
}

export interface Nomination {
  id: string;
  email: string;
  description: string;
  score: {
    involvement: number;
    talent: number;
  };
  referrer: string;
  dateReferred: string;
  status: "PENDING" | "REJECTED";
}

const NominationsList = () => {
  const [nominations, setNominations] =
    React.useState<Nomination[]>(nominationsMockdata);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchNominationsData = () => {
    setIsLoading(true);

    /* novaApi
      .get<NominationsFetchDataResponse>("/nominations")
      .then((res) => {
        setNominations(res.data.data);
        setIsLoading(false);
      })
      .catch((e: Error | AxiosError<{ message: string }>) => {
        if (axios.isAxiosError(e) && e.response) {
          setError(e.response?.data.message || "error test");
        } else {
          setError(e.message || "error test");
        }
        setIsLoading(false);
      }); */

    setTimeout(() => setIsLoading(false), 2000);
  };

  React.useEffect(() => fetchNominationsData(), []);

  const filteredNominations = nominations.filter(
    (nomination) => nomination.status !== "REJECTED"
  );

  if (error) return <p style={{ marginTop: 80 }}>{error}</p>;
  if (filteredNominations.length <= 0)
    return <p style={{ marginTop: 80, maxWidth: 500 }}>No data available</p>;

  const TableJSX = (
    <div style={{ marginTop: 50, maxWidth: 500 }}>
      <Table
        theme="light"
        columns={columns}
        data={filteredNominations}
        pagination
      />
    </div>
  );

  const TableWithLoading = WithLoading(TableJSX);

  return <TableWithLoading isLoading={isLoading} />;
};

export { NominationsList };
