export default function SectionHeading({
  eyebrow,
  title,
  lead,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className={`mb-3 flex items-center gap-3 font-mono text-sm text-teal ${
          centered ? "justify-center" : ""
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-teal/50" />
        {eyebrow}
        {centered && <span aria-hidden className="h-px w-8 bg-teal/50" />}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 max-w-xl text-lg text-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
