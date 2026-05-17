export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Memory-Hogging<br />
          <span className="text-[#58a6ff]">Browser Tabs</span> Automatically
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TabMemory monitors every open tab in real time, ranks them by RAM consumption, and tells you exactly which ones to close — so your browser stays fast.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get TabMemory — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on Chrome &amp; Edge.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Real-time memory ranking", "Auto-close suggestions", "Historical usage charts", "Zero cloud data"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to tame tab chaos</p>
          <div className="text-5xl font-bold text-white mb-1">
            $9<span className="text-2xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">or $79/yr — save 27%</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Live memory dashboard",
              "Smart close recommendations",
              "Tab memory history (30 days)",
              "Idle tab hibernation",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does TabMemory measure tab memory?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              The extension uses Chrome's built-in <code className="text-[#58a6ff] bg-[#161b22] px-1 rounded">chrome.processes</code> and performance APIs to sample each tab's private memory footprint every 30 seconds. All data stays on your device — nothing is sent to any server.
            </p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">Will it slow down my browser?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              No. The background service worker is lightweight and only polls when Chrome is idle. In benchmarks, TabMemory adds less than 5 MB of overhead — far less than a single YouTube tab.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Yes. Cancel with one click from your Lemon Squeezy customer portal. You keep access until the end of your billing period with no questions asked.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} TabMemory. All rights reserved.
      </footer>
    </main>
  );
}
