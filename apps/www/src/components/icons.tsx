type IconProps = React.HTMLAttributes<SVGElement>

function Logo(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      x="80"
      y="80"
      alignment-baseline="middle"
      style={{ color: "rgb(0, 0, 0)" }}
      {...props}
    >
      <title>Logo</title>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m9.25 1.75-6.5 6.5h4v6l6.5-6.5h-4v-6Z"
      />
    </svg>
  )
}

function Spinner(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Spinner</title>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

function Menu(props: IconProps) {
  return (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <title>Menu</title>
      <path
        d="M3 5H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { Logo, Spinner, Menu }
