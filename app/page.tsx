import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { getPreferredLocale } from "@/lib/get-preferred-locale"

export default async function RootPage() {
  const headerList = await headers()
  const acceptLanguage = headerList.get("accept-language")
  const locale = getPreferredLocale(acceptLanguage)

  redirect(`/${locale}`)
}
