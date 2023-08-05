export default function Footer() {
    return (
      <>
      <footer className="pb-6 pt-6 text-center text-xs text-black/80 sm:pb-12 ">
        Built by{" "}
        <a
          href="https://www.kennethgalang.com/"
          target="_blank"
          className="font-semibold hover:text-slate-500"
          rel="noreferrer"
        >
          Kenneth Galang
        </a>
        <p className="pt-1">
          <a
            href="https://www.instagram.com/kenpaso_/"
            target="_blank"
            className="font-semibold hover:text-slate-500"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="mailto:hello@kenpaso.com"
            target="_blank"
            className="font-semibold hover:text-slate-500"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
      </footer></>
      
      
    )
  }