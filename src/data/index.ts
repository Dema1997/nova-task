import { Nomination } from "../components";

export const nominationsMockdata: Nomination[] = [
  {
    id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
    email: "newcandidate@gmail.com",
    description: "newcandidate@gmail.com",
    score: {
      involvement: 9,
      talent: 10,
    },
    referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
    dateReferred: "2020-08-20T08:40:58.200Z",
    status: "PENDING",
  },
  {
    id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
    email: "newcandidate_2@gmail.com",
    description: "newcandidate_2@gmail.com",
    score: {
      involvement: 8,
      talent: 7,
    },
    referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
    dateReferred: "2020-08-25T09:50:13.200Z",
    status: "REJECTED",
  },
  {
    id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
    email: "newcandidate@gmail.com",
    description: "newcandidate@gmail.com",
    score: {
      involvement: 8,
      talent: 8,
    },
    referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
    dateReferred: "2020-08-20T08:40:58.200Z",
    status: "PENDING",
  },
];
