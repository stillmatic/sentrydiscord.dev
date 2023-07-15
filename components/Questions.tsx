import React, { ReactNode } from 'react';

interface QuestionExternalLinkProps {
  href: string;
  children: ReactNode;
}

export function QuestionExternalLink({ href, children }: QuestionExternalLinkProps): JSX.Element {
  return (
    <a className="underline text-white" href={href}>
      {children}
    </a>
  );
}

interface QuestionProps {
  title: string;
  children: ReactNode;
}

export default function Question({ title, children }: QuestionProps): JSX.Element {
  return (
    <div>
      <dt className="text-lg leading-6 font-medium text-white">{title}</dt>
      <dd className="mt-2 text-base text-indigo-200">{children}</dd>
    </div>
  );
}