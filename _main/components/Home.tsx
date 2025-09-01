"use client"
import dynamic from 'next/dynamic';
import React from 'react';

// ButtonProps 타입을 미리 정의
interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const RemoteButton = dynamic(
  () =>
    import('remote-app/Button').then(
      (mod) => mod.default as React.ComponentType<ButtonProps>
    ),
  {
    ssr: false,
    loading: () => <p>Loading Button...</p>,
  }
);

export default function Home() {
  return (
    <div>
      <h1>Host Application</h1>
      <RemoteButton text={"Click Me!"} onClick={() => alert('Clicked!')} />
    </div>
  );
}