interface TitleDescriptionProps {
  title?: string;
  description?: string;
  h1Cn?: string;
  label?: string;
  divCn?: string;
}

export const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  h1Cn,
  label,
  divCn,
}) => {
  return (
    <div className={`flex flex-col gap-4 ${divCn} `} aria-label={label}>
      <h1
        className={`title text-3xl sm:text-5xl font-bold tracking-tight leading-snug ${h1Cn} `}
      >
        {title}
      </h1>
      <p className="w-full sm:w-9/12 flex flex-col gap-4 text-slate-400 text-md sm:text-lg tracking-tight">
        {description}
      </p>
    </div>
  );
};
