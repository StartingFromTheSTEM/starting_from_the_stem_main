import LandingNavbar from "@/components/ui/landing_navbar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <LandingNavbar/>
        {children}
      </section>
    )
  }