// src/components/Logo.tsx
export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="logoTitle"
    >
      <title id="logoTitle">Randy Sampson Logo</title>
      <rect width="100" height="100" fill="currentColor" rx="12" />
      <text
        x="50%"
        y="50%"
        fill="white"
        fontSize="48"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, sans-serif"
      >
        RS
      </text>
    </svg>
  );
}
