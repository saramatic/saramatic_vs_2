"use client";

import Image from "next/image";
import React, { useState } from "react";

const primaryCtaHref = "#final-cta";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={primaryCtaHref}
      className="inline-flex items-center justify-center rounded-full bg-[#0B4F6C] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#783B5A]"
    >
      {children}
    </a>
  );
}


type FaqItem = { question: string; answer: string };

const faqs: FaqItem[] = [
  {
    question: "Is The Saramatic Affirmations Journal & Planner a physical book?",
    answer:
      "No. This is a 100% digital product designed for modern planning. You receive a hyperlinked PDF planner and templates optimized for tablets and printing.",
  },
  {
    question: "Do I need a ChatGPT Pro subscription?",
    answer:
      "No. The custom prompts work with the free version of ChatGPT, so you can start right away.",
  },
  {
    question: "How long does the daily practice take?",
    answer:
      "The daily practice can take as little as 5 minutes for the affirmations and up to 30 minutes if you use the deeper AI prompts and journaling space.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="rounded-2xl border border-[#F3E7E7] bg-white/50 px-4 py-3">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left text-sm font-semibold text-[#0B4F6C]"
            >
              <span>{faq.question}</span>
              <span className="text-lg text-[#783B5A]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="mt-2 text-sm text-[#514241]">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF9F9] text-[#514241]">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-[#F3E7E7] bg-[#FFF9F9]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Saramatic logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-[#0B4F6C]">Saramatic</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A3769F]">
                The Saramatic Affirmations Journal & Planner
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">

            <PrimaryButton>Get the Planner</PrimaryButton>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section
        id="hero"
        className="bg-gradient-to-br from-[#F7C9C9] via-[#F3E7E7] to-[#F9EFF2] py-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#783B5A] md:text-left">
              A different kind of affirmation journal
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0B4F6C] md:text-4xl lg:text-5xl">
              Tired of fake growth? Affirmations that actually work: End toxic positivity with The
              Saramatic Planner.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#514241]">
              The Saramatic Affirmations Journal & Planner is a full 2026 digital journal + planner designed for people
              who are done with guilt-heavy self-help and forced positivity. Built around The Saramatic Way, it helps you
              meet yourself honestly, understand what you’re feeling, and still move forward with compassion.
            </p>


            <div className="mt-4 space-y-1 text-sm text-[#514241]">
              <p className="font-semibold text-[#0B4F6C]">
                Inside, you&apos;re getting:
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#514241]">
                It’s a complete system that connects your emotions, your reflections, and your actual schedule:
              </p>

              <div className="mt-4 space-y-1 text-sm text-[#514241]">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Weekly Shadow affirmations (the real challenge you&apos;re working with) and daily Light
                    affirmations (the supportive truth that helps you move through it).
                  </li>
                  <li>
                    Built-in ChatGPT prompts so you&apos;re never staring at a blank page or wondering what to
                    journal about — you always have a gentle conversation starter.
                  </li>
                  <li>
                    A full planner system — yearly, quarterly, monthly, weekly, and daily pages — so your
                    inner work and real-life tasks finally live in one place instead of competing for energy.
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton>Get Instant Access: Start Your Authentic Growth Today</PrimaryButton>
              <p className="text-xs text-[#514241] sm:max-w-xs">
                Instant digital download · Hyperlinked PDF · Works beautifully on tablets &amp; for
                printing.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md text-center">
            {/* Tagline above the image */}
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#783B5A]">
              REAL GROWTH · NO TOXIC POSITIVITY
            </p>

            {/* Image frame */}
            <div className="rounded-[32px] bg-gradient-to-br from-[#783B5A] via-[#A3769F] to-[#F7C9C9] p-4 shadow-xl">
              <Image
                src="/planner-cover.png"
                alt="The Saramatic Affirmation Journal & Daily Planner"
                width={800}
                height={1000}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </div>

            {/* Digital planner label */}
            <p className="mt-4 text-xs font-semibold tracking-wide text-[#514241]">
              Digital Planner · Hyperlinked PDF
            </p>
          </div>


        </div>
      </section>

      {/* SECTION 2: WHY SARAMATIC */}
      <section className="bg-[#F9EFF2] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0B4F6C]">Why The Saramatic Way exists</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#514241]">
            The Saramatic Way is the method behind the planner — a gentle approach to self-growth built on honesty,
            reflection, and emotional balance. Instead of pretending everything is fine, it gives you language for it comes from meeting yourself where you actually are and choosing
            to grow through it with compassion.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#514241]">
            The Saramatic Affirmations Journal & Planner applies this method through structured yearly, monthly,
            weekly, and daily pages that make reflection and planning feel approachable and deeply human.
            Every page is crafted to make self-reflection feel approachable, structured, and human.
            Instead of loose, random prompts, you move through a gentle rhythm of seasons, themes, and
            daily check-ins that all connect. It&apos;s more than a journal — it&apos;s a grounded,
            repeatable practice of awareness, acceptance, and authentic growth, one honest week at a time.
          </p>

        </div>
      </section>

      {/* SECTION 3: EMOTIONAL CONTRAST */}
      <section className="bg-gradient-to-b from-[#F7C9C9] to-[#F3E7E7] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] md:items-start">
          <div>
            <h2 className="text-center text-2xl font-bold text-[#0B4F6C] md:text-left">
              Emotional contrast: Light &amp; Shadow affirmations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              Most affirmation journals ask you to repeat one nice sentence and pretend you believe it.
              The planner uses The Saramatic Way to guide your growth through emotional contrast: one Shadow for the
              week, one Light each day. Two truths — one honest, one hopeful — working together.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              Each month sits inside a quarterly theme. Each week has its own Shadow affirmation — the honest
              challenge you&apos;re working with. Every day brings a new Light affirmation that speaks directly
              to that Shadow. Over time, you&apos;re not forcing yourself to “stay positive”; you&apos;re
              learning to hear your fear, your doubt, and your hope at the same table and move forward anyway.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#0B4F6C]">
              Together, Light and Shadow create emotional contrast — the sweet spot where real, lasting
              change actually happens.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#514241]">
              <li>Respond instead of react.</li>
              <li>Soften instead of shut down.</li>
              <li>Understand your patterns instead of judging yourself.</li>
              <li>Choose your next step with clarity instead of fear.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#F3E7E7] bg-[#F9EFF2]/70 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#783B5A]">
                The Light Affirmation
              </h3>
              <p className="mt-3 text-sm text-[#514241]">
                The Light is your intention — the part of you that&apos;s reaching for clarity, courage,
                or self-trust. It&apos;s written to feel believable, not cheesy.
              </p>
              <p className="mt-2 text-sm text-[#514241]">
                Each day&apos;s Light affirmation answers: “Given everything I&apos;m feeling, what
                gentle truth do I want to lean toward today?”
              </p>

            </div>
            <div className="rounded-2xl border border-[#F7C9C9] bg-[#F3E7E7]/70 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#783B5A]">
                The Shadow Affirmation
              </h3>
              <p className="mt-3 text-sm text-[#514241]">
                The Shadow is the honest challenge underneath your day — the fear, resistance, or old story
                that tends to flare up when you try to grow. It isn&apos;t the enemy; it&apos;s the message.
              </p>
              <p className="mt-2 text-sm text-[#514241]">
                You stay with one Shadow affirmation for the whole week so you can really hear what it&apos;s
                trying to protect, instead of fighting it, ignoring it, or pretending it&apos;s gone.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AI-GUIDED REFLECTION */}
      <section className="bg-[#FFF9F9] py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#0B4F6C]">
              Go deeper than just writing: AI-guided reflection made simple.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              Saramatic doesn&apos;t leave you alone with a pretty page and good intentions. Every day,
              you get a gentle ChatGPT prompt that helps you unpack your Light &amp; Shadow affirmations
              so you can turn “I feel off” into real language, real insight, and real next steps.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              Think of it as a calm, non-judgy guide sitting beside you while you journal — helping you
              notice patterns, soften self-criticism, and choose what to do next with more clarity instead
              of more pressure.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#514241]">
              <li>• No more blank-page dread — you always know how to start the conversation.</li>
              <li>• Turn swirling thoughts into clear sentences you can actually work with.</li>
              <li>• Catch the insight in the moment, then bring it back to your journaling page.</li>
              <li>• Build a steady rhythm of reflection that feels supportive, not like extra homework.</li>
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-full bg-[#A3769F] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#006D6F]"
              >
                Unlock AI-guide Planner
              </a>
              <a
                href="#daily-spread"
                className="text-sm font-semibold text-[#783B5A] underline-offset-2 hover:underline"
              >
              </a>
            </div>

            <a
              href="#daily-flow"
              className="text-sm font-semibold text-[#783B5A] underline-offset-2 hover:underline "
            >
            </a>

          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-[#0B4F6C] p-5 text-sm text-white shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F7C9C9]">
                In ChatGPT · Sample flow
              </p>
              <p className="mt-3">
                <span className="font-semibold">You:</span> Here are today&apos;s Light &amp; Shadow
                affirmations. Help me unpack what the Shadow is trying to protect.
              </p>
              <p className="mt-2">
                <span className="font-semibold">ChatGPT:</span> Let&apos;s look at what feels scary and
                what it&apos;s protecting. What&apos;s the smallest next action that feels honest and kind
                to you?
              </p>
              <p className="mt-3 text-xs text-[#F9EFF2]">
                You paste in the prompt, let the conversation guide your reflection, then capture what
                matters on the journaling page — so you&apos;re not just saying affirmations, you&apos;re
                actually becoming them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: YEAR FLOW */}
      <section className="bg-gradient-to-b from-[#F7C9C9] to-[#F3E7E7] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <h2 className="text-center text-2xl font-bold text-[#0B4F6C] md:text-left">
              How the year unfolds inside the planner
            </h2>
            <p className="mt-4 text-sm text-[#514241]">
              The planner follows The Saramatic Way by moving through a story-like flow of seasons:
              quarterly themes, monthly themes, weekly Shadows, daily Lights, and daily reflection prompts.

              The entire system is designed to feel like a story arc — not a pile of disconnected pages.
            </p>
            <div className="mt-6 space-y-6 text-sm text-[#514241]">

              <div className="pb-4 border-b border-[#783B5A]">
                <p className="font-semibold text-[#0B4F6C]">Quarterly themes</p>
                <p className="mt-1">
                  Seed, Bloom, Flourish, Harvest — four emotional seasons that give your year a clear rhythm.
                </p>
              </div>

              <div className="pb-4 border-b border-[#783B5A]">
                <p className="font-semibold text-[#0B4F6C]">Monthly themes</p>
                <p className="mt-1">
                  Each month builds on its quarter with a focus that gently moves your story forward.
                </p>
              </div>

              <div className="pb-4 border-b border-[#783B5A]">
                <p className="font-semibold text-[#0B4F6C]">Weekly sub-themes</p>
                <p className="mt-1">
                  Smaller, relatable angles that make the month’s theme something you can actually live.
                </p>
              </div>

              <div className="pb-4 border-b border-[#783B5A]">
                <p className="font-semibold text-[#0B4F6C]">Weekly Shadow affirmation</p>
                <p className="mt-1">
                  One honest challenge you sit with all week — instead of juggling seven different problems.
                </p>
              </div>

              <div className="pb-4 border-b border-[#783B5A]">
                <p className="font-semibold text-[#0B4F6C]">Daily Light affirmation</p>
                <p className="mt-1">
                  A new supportive truth each day that speaks directly to that week’s Shadow.
                </p>
              </div>

              <div className="pb-4 border-b border-[#783B5A]">
                <p className="font-semibold text-[#0B4F6C]">ChatGPT + journaling</p>
                <p className="mt-1">
                  Guided prompts & writing space that turn reflection into real habits.
                </p>
              </div>

            </div>

            <p className="mt-4 text-sm text-[#514241]">
              Over time, this rhythm quietly rewires how you talk to yourself. You&apos;re never asked to
              pretend you&apos;re somewhere you&apos;re not — you&apos;re simply given a gentler way to move
              from where you are to where you want to be.
            </p>

          </div>
          <div className="mx-auto w-full max-w-sm rounded-[32px] bg-gradient-to-br from-[#783B5A] via-[#A3769F] to-[#F7C9C9] p-4 shadow-xl">
            <Image
              src="/planner-cover.png"
              alt="Saramatic planner pages preview"
              width={600}
              height={800}
              className="h-auto w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: DAILY VIEW */}
      <section
        id="daily-spread"
        className="bg-gradient-to-br from-[#F7C9C9] via-[#F3E7E7] to-[#F9EFF2] py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* Title + intro */}
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C]">
              What a day inside The Saramatic Planner really holds
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#514241]">
              Each daily spread weaves together honest affirmations, AI-guided reflection, health tracking,
              and real-life planning — so you&apos;re not choosing between “doing the work” and living your
              day. Everything that matters lives on the same spread: your feelings, your thoughts, your body,
              and your time.
            </p>

          </div>

          {/* Two-column daily flow */}
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Column 1 */}
            <div className="space-y-8 text-sm md:text-base text-[#514241]">
              <div className="space-y-3">
                <p className="text-base md:text-lg font-semibold text-[#0B4F6C]">
                  Morning · Set your emotional tone with Light + Shadow
                </p>
                <p>
                  Weekly Shadow affirmation holds the honest challenge you&apos;re working with all
                  week — the doubt, fear, or pattern that usually trips you up.
                </p>
                <p>
                  Daily Light affirmation shifts how you respond to that challenge — a new supportive
                  truth each day, written to feel believable, not cheesy.
                </p>
                <p>
                  A short explanation grounds you so you know why this combo matters today, not just
                  what to repeat.
                </p>
                <p className="font-medium text-[#0B4F6C]">
                  Benefit: You start the day seeing the real problem and the path through it —
                  instead of pretending you&apos;re fine or drowning in guilt.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-base md:text-lg font-semibold text-[#0B4F6C]">
                  Any time of day · A real conversation with yourself (via ChatGPT)
                </p>
                <p>Every daily spread includes:</p>
                <p>
                  A System instruction you paste into ChatGPT so it understands &quot;The Saramatic
                  Way&quot; voice and how to support you.
                </p>
                <p>
                  A User prompt that ties directly to today&apos;s Light + Shadow affirmations (or
                  that week&apos;s theme).
                </p>
                <p>You can ask ChatGPT to help you:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Unpack what your Shadow is trying to protect.</li>
                  <li>Name what you&apos;re afraid will happen if you really change.</li>
                  <li>Find the smallest next step that&apos;s honest and kind to you.</li>
                </ul>
                <p>
                  Then you capture what lands on the daily journaling page next to your affirmations.
                </p>
                <p className="font-medium text-[#0B4F6C]">
                  Benefit: You&apos;re not just repeating words — you&apos;re actually processing,
                  making decisions, and learning how you talk to yourself under stress.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8 text-sm md:text-base text-[#514241]">
              <div className="space-y-3">
                <p className="text-base md:text-lg font-semibold text-[#0B4F6C]">
                  Through the day · Plan a life that matches your inner work
                </p>
                <p>On the same daily spread, you also get:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    A 24-hour schedule broken into 30-minute increments — because not everyone lives
                    a 9–5 life.
                  </li>
                  <li>
                    Space for goals, to-dos, and priorities, so your healing work and your real-world
                    responsibilities live in one place, not in separate worlds.
                  </li>
                  <li>
                    A reminder to check your monthly tracker at the bottom of the reflections page,
                    so the little actions you&apos;re taking today feed into your bigger story.
                  </li>
                </ul>
                <p className="font-medium text-[#0B4F6C]">
                  Benefit: Growth stops being &quot;extra homework&quot; and becomes something that
                  quietly shapes how you spend your actual time.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-base md:text-lg font-semibold text-[#0B4F6C]">
                  Body &amp; nervous system · Gentle daily health check-in
                </p>
                <p>
                  Each day also includes a full health log so you can see how your body and emotions
                  are connected:
                </p>
                <p>
                  Food log: breakfast, lunch, dinner, and two snack boxes — plus a simple visual
                  macro wheel (fruits, veggies, grains, proteins) so you notice patterns without
                  obsessing.
                </p>
                <p>Sleep &amp; mood check-ins:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>&quot;How I slept last night&quot; with emoji-style faces.</li>
                  <li>&quot;How am I feeling this morning?&quot;</li>
                  <li>&quot;How am I feeling this evening?&quot;</li>
                </ul>
                <p>Water tracker: simple cups to fill in throughout the day.</p>
                <p className="font-medium text-[#0B4F6C]">
                  Benefit: You start to notice, &quot;Oh, when I sleep like this and eat like that,
                  my Shadow is louder,&quot; instead of thinking you&apos;re &quot;just being
                  dramatic.&quot;
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-base md:text-lg font-semibold text-[#0B4F6C]">
                  Night · Close the loop with reflection
                </p>
                <p>On the facing journaling page and daily reflection prompts, you can:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Capture what came up in ChatGPT or during the day.</li>
                  <li>
                    Note what felt heavy, what opened, and what you want to carry into tomorrow.
                  </li>
                  <li>
                    Gently check: Did I move one step closer to the life I&apos;m trying to build?
                  </li>
                </ul>
                <p className="font-medium text-[#0B4F6C]">
                  Benefit: Little moments become patterns. Patterns become habits. Habits become
                  healing — without pressure to &quot;fix everything&quot; overnight.
                </p>
              </div>
            </div>
          </div>

          {/* Image Row: 6 images */}
          <div className="mt-12 grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-[24px] bg-gradient-to-br from-[#783B5A] via-[#A3769F] to-[#F7C9C9] p- shadow-lg"
              >
                <div className="overflow-hidden rounded-[20px] bg-white">
                  <Image
                    src="/planner-cover.png" // use your cover as placeholder for now
                    alt={`Saramatic Daily Page ${i}`}
                    width={400}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA under images */}
          <div className="mt-10 flex justify-center">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full bg-[#0B4F6C] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#006D6F]"
            >
              Order Today
            </a>
          </div>
        </div>
      </section>



      {/* SECTION 7: COMPARISON */}
      <section className="bg-gradient-to-b from-[#F7C9C9] to-[#F3E7E7] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-[#0B4F6C]">
            A planner for your days. A practice for your healing.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-[#514241]">
            The Saramatic Affirmations Journal & Planner makes sure your emotional work supports your real-world goals, not
            competes with them.
          </p>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-[#F3E7E7] bg-white/80 shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#783B5A] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">What you get</th>
                  <th className="px-4 py-3 font-semibold">Most planners</th>
                  <th className="px-4 py-3 font-semibold">
                    The Saramatic Affirmations Journal &amp; Planner
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Quarterly layouts",
                    basic: "✓ Often includes basic quarterly pages",
                    saramatic:
                      "✓ Guided quarterly themes (Seed, Bloom, Flourish, Harvest) that shape your affirmations, reflections, and the emotional arc of your year",
                  },
                  {
                    feature: "Monthly layouts",
                    basic: "✓ Often includes basic monthly pages",
                    saramatic:
                      "✓ Monthly themes that give structure to your weekly Shadow and daily Light affirmations, making reflection feel natural and meaningful",
                  },
                  {
                    feature: "Weekly layouts",
                    basic: "✓ Often includes basic weekly pages",
                    saramatic:
                      "✓ Weekly themes with one clear Shadow affirmation that helps you understand the real challenge you're working through all week",
                  },
                  {
                    feature: "Daily pages",
                    basic: "✓ To-do list and schedule",
                    saramatic:
                      "✓ A coordinated daily flow — schedule, to-dos, Light + Shadow affirmations, and AI prompts working together across your spread",
                  },
                  {
                    feature: "Emotional support",
                    basic: "— Usually ignores your emotions",
                    saramatic: "✓ Grounded in emotional contrast — helping you hold doubt, fear, and hope at the same time without collapsing into guilt or avoidance",
                  },
                  {
                    feature: "AI integration",
                    basic: "— None",
                    saramatic: "✓ Daily system + user prompts designed for ChatGPT, turning your affirmations into real insight, clarity, and next steps",
                  },
                  {
                    feature: "Reflection & growth",
                    basic: "— Minimal or generic reflection",
                    saramatic:
                      "✓ Layered reflections at every level — yearly, quarterly, monthly, weekly, and daily — so your growth actually accumulates",
                  },
                ].map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? "bg-white/70" : "bg-[#F9EFF2]/70"}>
                    <td className="px-4 py-3 font-semibold text-[#0B4F6C]">{row.feature}</td>
                    <td className="px-4 py-3">{row.basic}</td>
                    <td className="px-4 py-3 font-medium text-[#0B4F6C]">{row.saramatic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 8: HONEST GROWTH */}
      <section className="bg-[#FFF9F9] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-[#0B4F6C]">Honest growth, gently guided</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-[#514241]">
            Saramatic was created for people who are tired of being told to “just think positive.” It
            treats your mind and heart with respect — and never asks you to pretend your pain doesn&apos;t
            exist in order to earn your progress.
          </p>

          <div className="mt-8 rounded-3xl border border-[#F3E7E7] bg-white/80 p-6 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#783B5A]">
                  Creator note
                </h3>
                <p className="mt-3 text-sm text-[#514241]">
                  “I created this planner because I was exhausted by the guilt-and-failure cycle of
                  toxic positivity. This system works because it&apos;s built on honesty, not fantasy.
                  It&apos;s the gentle structure I needed when everything felt like too much — something
                  I could actually stick with on real, messy days.”
                </p>

                <p className="mt-3 text-sm font-semibold text-[#783B5A]">
                  — Sarahmarie, creator of The Saramatic
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#783B5A]">
                  Authentic Growth Guarantee
                </h3>
                <p className="mt-3 text-sm text-[#514241]">
                  Try The Saramatic Affirmations Journal & Planner for 30 days. If you don&apos;t feel more grounded, honest, and
                  connected to yourself, we&apos;ll give you a full refund. No drama, no shaming —
                  just a clean “this wasn&apos;t for me.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA + FAQ */}
      <section
        id="final-cta"
        className="bg-gradient-to-br from-[#F7C9C9] via-[#F3E7E7] to-[#F9EFF2] px-6 py-16 sm:px-10 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-[#0B4F6C] sm:text-3xl">
              It’s time to stop faking it and start feeling it.
            </h2>
            <p className="text-sm sm:text-base">
              This journal isn’t asking you to be perfect. It’s asking you to show up — gently,
              consistently, and honestly. The Saramatic Affirmation Journal & Planner meets you where you are, gives you words
              for what you’re feeling, and helps you build a life that actually fits the person you&apos;re
              becoming.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <PrimaryButton>Start Your Journey Today</PrimaryButton>
            </div>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </main >
  );
}
