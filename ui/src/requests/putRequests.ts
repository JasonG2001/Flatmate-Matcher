import { PutBody } from "../util/interfaces/PutBody";

export const put = (url: string, body: PutBody | object) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
