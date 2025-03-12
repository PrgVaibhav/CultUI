interface CardProps {
  cn?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Card: React.FC<CardProps> = ({ cn, children, ariaLabel }) => {
  return (
    <div className="flex flex-wrap items-stretch">
      <div className={`${cn}`} aria-label={ariaLabel}>
        {children}
      </div>
    </div>
  );
};
