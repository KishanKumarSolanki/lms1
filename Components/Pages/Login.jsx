const Login = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="relative isolate flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]" />

        <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
          <section className="hidden flex-col justify-between bg-white/5 p-10 lg:flex xl:p-14">
            <div>
              <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                Learning starts here
              </span>
              <h1 className="mt-6 max-w-md text-4xl font-semibold tracking-tight text-white">
                Welcome back to your learning workspace.
              </h1>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                Sign in to continue your courses, track progress, and pick up exactly where you left off.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-300">Today&apos;s focus</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-200">Courses in progress</span>
                  <span className="text-lg font-semibold text-white">12</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-slate-200">Certificates earned</span>
                  <span className="text-lg font-semibold text-white">4</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-6 py-10 text-slate-900 sm:px-10 lg:px-12 xl:px-14">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-10">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                  Login
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  Sign in to your account
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your details below to access your dashboard.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Password
                    </label>
                    <a href="/" className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 text-sm">
                  <label className="flex items-center gap-3 text-slate-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    Remember me
                  </label>
                  <span className="text-slate-400">UI only</span>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  Sign In
                </button>
              </form>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Or continue with
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  GitHub
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Don&apos;t have an account?{' '}
                <a href="/" className="font-semibold text-cyan-700 hover:text-cyan-800">
                  Create one
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Login
