import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          <a className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">Qwik</a> is a multipurpose <a className="bg-gradient-to-r from-[#5865F2] via-[#5865F2] to-indigo-400 text-transparent bg-clip-text">Discord</a> bot
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          <a className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            Qwik
          </a> has features like suggestion, logging, moderation & auto-moderation. To view the modules
          <a
            className="bg-gradient-to-r from-[#5865F2] to-blue-700 bg-transparent bg-clip-text"
            href="/commands"
          > click here.
          </a>
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.invite}
          className={buttonVariants({})}
        >
          Invite
        </Link>
      </div>
    </section>
  )
}
