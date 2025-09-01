import { NextPageContext } from 'next';

function Error({ statusCode }: { statusCode: number }) {
  return <p>{statusCode} – An error occurred</p>;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode! : 404;
  return { statusCode };
};

export default Error;
