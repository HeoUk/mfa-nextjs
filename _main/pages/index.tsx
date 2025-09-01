'use client';
import dynamic from 'next/dynamic';

const RemoteHome = dynamic(
  () =>
    import('remote-app/HomePage').then((mod) => mod.default),
  { ssr: false, loading: () => <p>Loading Home...</p> }
);

export default function HostHome() {
  return <RemoteHome />;
}
