"use client";
import styled from "../../../styles/allStyles/card/card.module.css";

interface CardProps {
  title: string;
  subtitle: string;
  children: any;
}

export function MainCards({ title, subtitle, children }: CardProps) {
  return (
    <main className={styled.container}>
      <div className={styled.content}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className={styled.section}>{children}</div>
      </div>
    </main>
  );
}
