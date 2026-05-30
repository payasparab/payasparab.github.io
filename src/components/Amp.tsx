import { Fragment, type ReactNode } from 'react';

// Renders text with every "&" wrapped in <span class="amp"> so headings can
// show the font's elegant italic ampersand instead of the ornate upright one.
export function withAmp(text: string): ReactNode {
  const parts = text.split('&');
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <span className="amp">&amp;</span>}
      {part}
    </Fragment>
  ));
}
