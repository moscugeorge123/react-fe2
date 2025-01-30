import * as React from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Card({ title, children, description }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}
