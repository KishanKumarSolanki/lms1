import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="relative isolate flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#111827_45%,_#0f172a_100%)]" />

        <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-2xl shadow-sky-950/30 backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="flex flex-col justify-between bg-white/5 p-8 sm:p-10">
              <div>
                <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-sm font-medium text-amber-100">
                  Session ended
                </span>
                <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  You&apos;ve been logged out safely.
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
                  Your session has ended and your learning space is secure. Sign back in whenever you&apos;re ready to continue.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <p className="text-sm text-slate-300">Quick reminder</p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    Keep your account protected on shared devices.
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    Resume your courses anytime with a fresh sign-in.
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white px-6 py-10 text-slate-900 sm:px-10 lg:px-12">
              <div className="mx-auto flex h-full max-w-md flex-col justify-center">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl text-emerald-600">
                  ✓
                </div>

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                  Logged out
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  See you soon
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  You have successfully signed out of your account. Use the button below to get back to the login page.
                </p>

                <div className="mt-8 space-y-4">
                  <Link
                    to="/login"
                    className="block w-full rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Sign In Again
                  </Link>
                  <Link
                    to="/"
                    className="block w-full rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Back to Home
                  </Link>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  This page is UI only and does not perform real auth actions yet.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Logout
