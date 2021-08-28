import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(trackId: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, data, error } = useQuery(GET_TRACK, {
    variables: {
      trackId: trackId,
    },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
export default Track;
