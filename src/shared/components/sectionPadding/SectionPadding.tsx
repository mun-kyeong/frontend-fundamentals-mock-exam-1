import { Spacing } from 'tosslib';

interface SectionPaddingProps {
  top?: number;
  bottom?: number;
  children: React.ReactNode;
}

export default function SectionPadding({ top, bottom, children }: SectionPaddingProps) {
  return (
    <>
      {top !== undefined && <Spacing size={top} />}
      {children}
      {bottom !== undefined && <Spacing size={bottom} />}
    </>
  );
}
