import React, { Fragment } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function Repositories() {
    axios
        .get("https://ephemeral-tapioca-4abd88.netlify.app/nytreats.json")
        .then((res) => res.data)
        ;

        console.log(JSON.stringify(data))

        /* return (
            <>
            {data.map(repo => {
                return (
                    <Fragment
                    key = {repo.id}
                    >
                      <ul>
                        <li>
                            <a
                              href={repo.clone_url}>
                                {repo.name}
                              </a>
                        </li>
                      </ul>
                    </Fragment>
                )
            })}
            <button type="button" onClick={refetch}>
                Fetch again
            </button>
            </>
        );

    }; */
  }