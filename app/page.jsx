// TODO: Add brand fonts like 'Satoshi', 'Barlow Condensed Bold', 'Inter', and 'JetBrains Mono' to your global CSS and tailwind.config.js
// TODO: Add brand colors like 'Block Black', 'Glitch Red', 'Toxic Green', and 'Lavender Fog' to your tailwind.config.js

// This is a placeholder for a real countdown component.
// You would typically use React's useState and useEffect hooks for a live countdown.
function CountdownTimer() {
    return (
        <div className="my-8 bg-[#0B0B0B] text-[#FAFAFA] inline-block p-5 rounded-lg font-mono">
            {/* Subtext from the website brief */}
            <p className="text-lg">Reboot begins in...</p>
            {/* Styled like a terminal line, per the brief */}
            <p className="text-3xl tracking-widest mt-2">14:21:49:32</p>
        </div>
    );
}

export default function Page() {
    return (
        // Main container with an off-white background and black text
        <div className="bg-[#FAFAFA] text-[#0B0B0B]">
            {/* Section 1: Hero + Countdown [cite: 43] */}
            <header className="text-center py-20 px-6 border-b-2 border-[#0B0B0B]">
                {/* Headline from brand guide & brief [cite: 9, 44] */}
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase" style={{ color: '#FF4C69' /* Glitch Red */ }}>
                    Terminate. Format. Glow-up.
                </h1>
                {/* Subheadline from the brief */}
                <h2 className="text-xl mt-6">The faceless breakup ritual kit is launching in: [cite: 6]</h2>
                <CountdownTimer />
                <div>
                    {/* CTA Button from the brief [cite: 48] */}
                    <button className="bg-[#FF4C69] text-[#FAFAFA] font-bold text-xl py-4 px-8 rounded-md hover:opacity-90">
                        🧠 Get Early Access
                    </button>
                </div>
            </header>

            {/* Section 2: What is CTRL+ALT+BLOCK? */}
            <section className="text-center py-20 px-6 border-b-2 border-[#0B0B0B]">
                <h2 className="text-4xl font-bold max-w-2xl mx-auto">Not therapy. Not advice. Just pure digital closure.</h2>
                <p className="text-lg mt-4 max-w-xl mx-auto">
                    CTRL+ALT+BLOCK™ is a breakup kit for the emotionally done. Blocklists. Email templates. Emotional damage reports. Built for silence, sass, and moving the hell on. [cite: 6, 7]
                </p>
                {/* Tagline from Instagram Bio [cite: 56] */}
                <p className="font-mono text-md mt-6">Faceless. Savage. Aesthetic.</p>
            </section>

            {/* Section 3: What You’ll Get [cite: 45] */}
            <section className="bg-[#0B0B0B] text-[#FAFAFA] py-20 px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Column 1: Autoresponder Pack [cite: 40] */}
                    <div className="border border-[#B9AFFF] p-6">
                        <h3 className="text-2xl font-bold">💌 Autoresponder Pack™</h3>
                        <p className="mt-2 text-gray-300">Savage goodbye emails + auto-replies for closure on your terms.</p>
                    </div>
                    {/* Column 2: Emotional Damage Report [cite: 40] */}
                    <div className="border border-[#B9AFFF] p-6">
                        <h3 className="text-2xl font-bold">🧨 Emotional Damage Report™</h3>
                        <p className="mt-2 text-gray-300">Roast your relationship in a PDF you can print or delete.</p>
                    </div>
                    {/* Column 3: Blocklist Beautifier [cite: 40] */}
                    <div className="border border-[#B9AFFF] p-6">
                        <h3 className="text-2xl font-bold">🧱 Blocklist Beautifier™</h3>
                        <p className="mt-2 text-gray-300">Make your blocklist a thing of redacted glory.</p>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-8">💡 Plus bonus rituals, audio extras, and faceless revenge features.</p>
            </section>

            {/* Section 4: Vibe Check (Social Teasers) */}
            <section className="py-20 px-6 text-center">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono">
                    {/* Tiles with quotes from the brief */}
                    <div className="bg-[#D6D6D6] p-8 flex items-center justify-center">“I sent this to my ex and immediately blocked them.” [cite: 59]</div>
                    <div className="bg-[#0B0B0B] text-[#FAFAFA] p-8 flex items-center justify-center">“This autoresponder is savage.”</div>
                    <div className="bg-[#0B0B0B] text-[#FAFAFA] p-8 flex items-center justify-center">“Here’s the Emotional Damage Report™ I printed.”</div>
                    <div className="bg-[#D6D6D6] p-8 flex items-center justify-center">“CTRL+ALT+BLOCK is my therapy now.”</div>
                 </div>
                 <a href="#" className="inline-block mt-8 text-lg hover:underline">📲 Follow @ctrlaltblock for launch drops & petty gold. [cite: 4]</a>
            </section>

            {/* Section 5: Lead Magnet */}
            <section className="bg-gray-100 py-20 px-6 text-center">
                <h2 className="text-5xl font-bold">Be the first to block.</h2>
                <p className="mt-2 text-lg">Get early access to the Send It Pack™ + launch surprise. [cite: 40]</p>
                <div className="mt-8 flex justify-center gap-2">
                    <input type="email" placeholder="your.email@digital.void" className="p-4 border-2 border-[#0B0B0B] w-full max-w-sm font-mono" />
                    <button className="bg-[#0B0B0B] text-[#FAFAFA] font-bold py-4 px-8 whitespace-nowrap">Block Me In</button>
                </div>
                <p className="text-xs text-gray-500 mt-4">No spam. No exes. Just rituals.</p>
            </section>

            {/* Footer */}
            <footer className="bg-[#0B0B0B] text-gray-400 py-10 px-6 text-center text-sm">
                <div className="space-x-6">
                    {/* Footer links from the brief [cite: 50, 51, 52] */}
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Affiliate Program (“Petty Pays”)</a>
                    <a href="#" className="hover:text-white">Emotional FAQ</a>
                </div>
                {/* Copyright from the brief */}
                <p className="mt-6">© 2025 CTRL+ALT+BLOCK™ – All connections terminated.</p>
            </footer>
        </div>
    );
}
