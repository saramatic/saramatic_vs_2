"use client";

import Image from "next/image";
import React, { useState } from "react";
// Icons
import { Search, Bot, Calendar } from "lucide-react";
import { PiLightbulbFilament, PiPlant, PiLockKey } from "react-icons/pi";
import { IoIosCalendar, IoIosSearch, IoIosArrowForward } from "react-icons/io";
import { RiContrastLine, RiRobot2Line } from "react-icons/ri";
import ImageCarousel, { ClientSideOnly } from "./components/ImageCarousel";


// --- FINAL INTEGRATED DATA & COMPONENTS ---

// 🎯 Primary CTA Configuration
const primaryCtaHref = "#final-cta";

// 🖱️ UPDATED CTA TEXT
const PrimaryCtaText = "Purchase Now";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={primaryCtaHref}
      className="inline-flex items-center justify-center rounded-full bg-[#0B4F6C] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#783B5A] transform hover:scale-[1.03] duration-300"
    >
      {children}
    </a>
  );
}

// 🌟 Icons for Feature Lists
const FeatureIcons = {
  LightShadow: <RiContrastLine className="text-xl" />, // Contrast icon for Light & Shadow
  AIGuide: <RiRobot2Line className="text-xl" />, // Robot icon for AI Guide
  FullSystem: <IoIosCalendar className="text-xl" />, // Calendar icon for Full System
  // Icons used inside sections
  Sun: <PiLightbulbFilament className="text-xl text-[#783B5A]" />,
  Moon: <RiContrastLine className="text-xl text-[#783B5A]" />,
  Arrow: <IoIosArrowForward className="text-xl text-[#783B5A]" />,
  Seed: <PiPlant className="text-xl text-[#783B5A]" />,
  Trust: <PiLockKey className="text-lg text-[#783B5A]" />, // Lock icon for guarantee
};

// --- IMAGE CAROUSEL DATA ---

// Images for Section 5: Saramatic Rhythm (quarters / months)
const monthlyArtImages = [
  { src: "/images/Q_One.png", alt: "Quarter 1 Theme Spread" },
  { src: "/images/January.png", alt: "January Monthly Spread" },
  { src: "/images/Month_1.png", alt: "Monthly Art Spread 1" },
  { src: "/images/Month_2.png", alt: "Monthly Art Spread 2" },
  { src: "/images/February.png", alt: "February Monthly Spread" },
  { src: "/images/March.png", alt: "March Monthly Spread" },
  { src: "/images/Q_Two.png", alt: "Quarter 2 Theme Spread" },
  { src: "/images/Q_Three.png", alt: "Quarter 3 Theme Spread" },
  { src: "/images/Q_Four.png", alt: "Quarter 4 Theme Spread" },
];

// Images for Section 6: Daily spread views
const dailySpreadImages = [
  { src: "/images/Hour_AM.png", alt: "AM Hour Block" },
  { src: "/images/Hour_PM.png", alt: "PM Hour Block" },
  { src: "/images/Affirmation_Page.png", alt: "Affirmations and Journaling Page" },
  { src: "/images/Health_Log.png", alt: "Daily Health Log" },
];

// 📊 Comparison Table Data (SECTION 7)
const comparisonRows = [
  {
    feature: "Emotional Processing",
    basic: "General mood tracking (1-5 scale).",
    saramatic:
      "Daily Light & Shadow Affirmations. Structured prompts to unpack resistance and move through emotional blocks.",
  },
  {
    feature: "Affirmation Style",
    basic: "Standard positive sentences that often feel fake or cheesy.",
    saramatic:
      "The Saramatic Way: Honest contrast between a Shadow (the challenge) and a Light (the supportive truth), making affirmations feel believable and actionable.",
  },
  {
    feature: "Reflection & Guidance",
    basic: "Blank page or generic questions (e.g., 'What are you grateful for?').",
    saramatic:
      "Built-in ChatGPT Prompts to guide you from 'I feel scattered' to 'I know the next step.' No Pro subscription needed.",
  },
  {
    feature: "System Integration",
    basic: "Monthly & daily pages. Planning often feels separate from inner work.",
    saramatic:
      "A gentle, unified system (Yearly, Quarterly, Monthly, Weekly, Daily). Inner work and real-life tasks live in one connected place.",
  },
  {
    feature: "Body & Mind Connection",
    basic: "None or minimal space for health tracking.",
    saramatic:
      "Full daily health log for food, water, sleep, and mood to connect mind, body, and emotional cycles.",
  },
];

// --- FAQ Data + Accordion ---
type FaqItem = { question: string; answer: string };

const faqs: FaqItem[] = [
  {
    question: "Is The Saramatic Affirmations Journal & Planner a physical book?",
    answer:
      "No. This is a 100% digital product designed for modern planning. You receive a hyperlinked PDF planner and templates optimized for tablets (Goodnotes, Notability, etc.) and also ready for printing.",
  },
  {
    question: "Do I need a ChatGPT Pro subscription?",
    answer:
      "No. The custom prompts work with the free version of ChatGPT, so you can start getting guided insights right away.",
  },
  {
    question: "How long does the daily practice take?",
    answer:
      "The daily practice can take as little as 5 minutes for the Light & Shadow check-in and up to 30 minutes if you use the deeper AI prompts and journaling space. It is designed to fit real life, not interrupt it.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="rounded-2xl border border-[#F3E7E7] bg-white/50 px-4 py-3"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left text-sm font-semibold text-[#0B4F6C]"
            >
              <span>{faq.question}</span>
              <span className="text-lg text-[#783B5A]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="mt-2 text-sm text-[#514241]">{faq.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------
// 🏠 MAIN PAGE COMPONENT
// ----------------------------
export default function HomePage() {
  const mainCoverImage = "/images/planner-cover.png";

  return (
    <main className="min-h-screen bg-[#FFF9F9] text-[#514241]">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-[#F3E7E7] bg-[#FFF9F9]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Logo.png"
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
            <PrimaryButton>Purchase Now</PrimaryButton>
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
              END BURNOUT. STOP FEELING SCATTERED.
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0B4F6C] md:text-4xl lg:text-5xl">
              A softer, steadier path back to yourself. Affirmations that honor your light &amp; your
              shadow.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#514241]">
              The Saramatic Planner is a gentle 2026 guide built for the way real growth happens —
              slowly, intentionally, and with compassion. It brings healing, planning, and daily
              reflection together so your life feels supported, not pressured.
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#514241]">
              <p className="font-semibold text-[#0B4F6C] text-lg">
                The Saramatic Way replaces struggle with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="pt-0.5">{FeatureIcons.LightShadow}</span>
                  <div>
                    <span className="font-semibold text-[#0B4F6C]">
                      Authentic Affirmations:
                    </span>{" "}
                    Use emotional contrast (Light & Shadow) to make affirmations feel believable, not
                    fake or cheesy.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="pt-0.5">{FeatureIcons.AIGuide}</span>
                  <div>
                    <span className="font-semibold text-[#0B4F6C]">
                      Clearer Self-Connection:
                    </span>{" "}
                    Use built-in ChatGPT prompts to move past "I feel numb" to find real, actionable
                    insight and end self-sabotage.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="pt-0.5">{FeatureIcons.FullSystem}</span>
                  <div>
                    <span className="font-semibold text-[#0B4F6C]">
                      Mental Decluttering:
                    </span>{" "}
                    A full year structure where your inner work, daily schedule, and health log are
                    finally in one gentle system.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton>Purchase Now</PrimaryButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#783B5A]">
              REAL GROWTH · NO TOXIC POSITIVITY
            </p>

            <div className="rounded-[32px] bg-gradient-to-br from-[#783B5A] via-[#A3769F] to-[#F7C9C9] p-4 shadow-xl">
              <Image
                src={mainCoverImage}
                alt="The Saramatic Affirmation Journal & Daily Planner Cover"
                width={800}
                height={1000}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </div>

            <p className="mt-4 text-xs font-semibold tracking-wide text-[#514241]">
              Digital Planner · Hyperlinked PDF
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY SARAMATIC */}
      <section className="bg-[#F9EFF2] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0B4F6C]">
            The Saramatic Way: Honest Awareness. Gentle Action.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#514241]">
            This method is rooted in emotional balance. Instead of glossing over what you feel, it
            offers the<strong> language, structure, and gentle permission</strong> to notice your
            emotions and move forward with compassion.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#514241]">
            Your year is shaped through a soft rhythm of{" "}
            <strong>Seasons, Story, and Daily Check-ins</strong>. It creates a{" "}
            <strong>
              steady, repeatable practice of awareness, acceptance, and authentic growth
            </strong>{" "}
            — supportive, never demanding.
          </p>

          <div className="mt-8">
            <PrimaryButton>Purchase Now</PrimaryButton>
          </div>
        </div>
      </section>

      {/* SECTION 3: EMOTIONAL CONTRAST (Single Image) */}
      <section className="bg-gradient-to-b from-[#F7C9C9] to-[#F3E7E7] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <h2 className="text-center text-2xl font-bold text-[#0B4F6C] md:text-left">
              Emotional contrast: Light &amp; Shadow affirmations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              The <strong>Saramatic Affirmations Journal &amp; Planner</strong> uses emotional
              contrast — a weekly Shadow and a daily Light — to support growth that feels honest,
              grounded, and deeply human. Instead of repeating a sentence that doesn’t feel true yet,
              you explore both sides of your inner world: the tender truth and the quiet resistance.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              By spending the week with your Shadow, you give yourself space to understand what it’s
              trying to protect. From that understanding, your daily Light becomes something you can
              genuinely lean into. This is where soft, steady transformation begins.
            </p>

            <ul className="mt-6 space-y-6 text-med text-[#514241]">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <span className="text-3xl text-[#783B5A]">{FeatureIcons.Sun}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B4F6C]">The Light:</span>
                  <p className="mt-1 leading-relaxed">
                    Your daily supportive truth — the gentle clarity you can embody today.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <span className="text-3xl text-[#783B5A]">{FeatureIcons.Moon}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B4F6C]">The Shadow:</span>
                  <p className="mt-1 leading-relaxed">
                    The honest fear or resistance you sit with for the week — the part of you trying
                    to keep you safe.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <span className="text-3xl text-[#783B5A]">{FeatureIcons.Arrow}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#0B4F6C]">The Result:</span>
                  <p className="mt-1 leading-relaxed">
                    Affirmations that feel authentic. Guidance that helps you respond instead of
                    react. A clearer, more grounded next step — every single day.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Single static image */}
          <div className="mx-auto w-full max-w-sm text-center">
            <div
              className="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-[#783B5A] via-[#A3769F] to-[#F7C9C9] p-4 shadow-xl"
              style={{ paddingTop: "125%" }}
            >
              <Image
                src="/images/Affirmation_Page.png"
                alt="Detailed view of the Light & Shadow Affirmations Page"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[24px]"
                sizes="(max-width: 768px) 100vw, 300px"
                priority
              />
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
              Each day, the <strong>Saramatic Affirmations Journal &amp; Planner</strong> offers a
              gentle ChatGPT prompt to help you explore your Light &amp; Shadow affirmations more
              deeply. It turns “I feel stuck” into{" "}
              <strong>real language, honest insight, and a compassionate next step</strong> —
              guiding you through the blocks that keep you from moving forward.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#514241]">
              Think of it as a calm, supportive companion — helping you notice patterns, soften
              self-criticism, and choose what comes next with <strong>clarity instead of pressure.</strong>
            </p>

            <ul className="mt-6 space-y-4 text-sm text-[#514241]">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F7C9C9]/30 flex items-center justify-center">
                  <Search className="w-5 h-5 text-[#783B5A]" />
                </div>
                <span>
                  No more blank-page dread — you’ll always know how to begin the conversation with
                  yourself.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F7C9C9]/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#783B5A]" />
                </div>
                <span>
                  Turn swirling thoughts into gentle, clear sentences you can actually work with.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F7C9C9]/30 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#783B5A]" />
                </div>
                <span>
                  Build a soft, steady rhythm of reflection that feels supportive — never like extra
                  homework.
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <PrimaryButton>Purchase Now</PrimaryButton>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-[#0B4F6C] p-5 text-sm text-white shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F7C9C9]">
                Sample Flow: Inner Insight in 5 Minutes
              </p>
              <p className="mt-3">
                <span className="font-semibold">You paste the prompt:</span> "Here are today's
                Light &amp; Shadow affirmations. Help me unpack what the Shadow is trying to
                protect."
              </p>
              <p className="mt-2">
                <span className="font-semibold">ChatGPT helps:</span> "Let's look at what feels
                scary and what it's protecting. What's the smallest next action that feels honest
                and kind to you?"
              </p>
              <p className="mt-3 text-xs text-[#F9EFF2]">
                You capture the insight on your journaling page—so you're not just saying
                affirmations, you're actually becoming them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: YEAR FLOW + CAROUSEL */}
      <section className="bg-gradient-to-b from-[#F7C9C9] to-[#F3E7E7] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <h2 className="text-center text-2xl font-bold text-[#0B4F6C] md:text-left">
              From Yearly Themes to Daily Action: The Saramatic Rhythm
            </h2>

            <p className="mt-4 text-sm text-[#514241] leading-relaxed">
              The <strong>Saramatic Affirmations Journal &amp; Planner</strong> guides you through a
              gentle, repeating rhythm:{" "}
              <strong>
                yearly intentions, quarterly seasons, monthly focus, weekly Shadows, and daily
                Lights.
              </strong>{" "}
              Instead of starting over every month, you move through one continuous story — steady,
              supported, and never rushed.
            </p>

            <div className="mt-6 space-y-6 text-sm text-[#514241]">
              <div className="flex items-start gap-4 pb-4 border-b border-[#783B5A]/40">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {FeatureIcons.Seed}
                </div>
                <div>
                  <p className="font-semibold text-[#0B4F6C]">
                    Quarterly Themes: Seed, Bloom, Flourish, Harvest
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Four emotional seasons that give your year a clear, organic arc — so your goals
                    feel like growth, not pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-[#783B5A]/40">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <IoIosCalendar className="text-2xl text-[#783B5A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0B4F6C]">Monthly Focus &amp; Zodiac Art</p>
                  <p className="mt-1 leading-relaxed">
                    Each month deepens the quarter with a themed focus, custom zodiac art, and color —
                    giving your story a soft, visual anchor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-[#783B5A]/40">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {FeatureIcons.Moon}
                </div>
                <div>
                  <p className="font-semibold text-[#0B4F6C]">Weekly Shadow Affirmation</p>
                  <p className="mt-1 leading-relaxed">
                    One honest challenge you sit with all week — letting you notice your resistance
                    with kindness instead of pushing it away.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-2 border-b border-[#783B5A]/40">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {FeatureIcons.Sun}
                </div>
                <div>
                  <p className="font-semibold text-[#0B4F6C]">
                    Daily Light Affirmation + ChatGPT
                  </p>
                  <p className="mt-1 leading-relaxed">
                    A new supportive truth each day that speaks directly to that week’s Shadow, with
                    gentle AI prompts to help you turn insight into tiny, doable action.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-[#783B5A] leading-relaxed">
              The result: you’re never asked to fake being “further along.” You’re guided, step by
              step, from where you are to where you’re ready to go — at a pace that feels human.
            </p>
          </div>

          <div className="space-y-6">
            <ClientSideOnly>
              <ImageCarousel
                images={monthlyArtImages}
                aspectRatio={4 / 5}
                maxWidth="max-w-sm"
                title="THE SARAMATIC YEAR: QUARTERS · MONTHS · RITUALS"
              />
            </ClientSideOnly>
            <p className="text-center text-xs text-[#514241]">
              Tap to zoom and swipe through how the quarterly seasons and monthly themes come to
              life on the page.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: DAILY VIEW + CAROUSEL */}
      <section
        id="daily-spread"
        className="bg-gradient-to-br from-[#F7C9C9] via-[#F3E7E7] to-[#F9EFF2] py-10"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C]">
              Every page is designed to connect your mind, body, and schedule.
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#514241]">
              The daily spread honors hormones, energy levels, and real-life interruptions. It
              weaves together honest affirmations, AI-guided reflection, health tracking, and
              planning—so you’re not choosing between inner work and living your day.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3 md:items-stretch">
            <div className="space-y-4 rounded-xl border border-[#F3E7E7] bg-white/70 p-5 shadow-sm">
              <p className="text-base font-semibold text-[#0B4F6C] flex items-center gap-2">
                {FeatureIcons.Sun} Morning · Emotional Tone
              </p>
              <p className="text-sm flex items-start gap-2">
                {FeatureIcons.Moon}
                <span>
                  <span className="font-semibold text-[#0B4F6C]">
                    Light & Shadow Affirmations
                  </span>{" "}
                  set the emotional tone. The Shadow names the block; the Light offers the gentle,
                  believable truth.
                </span>
              </p>
              <p className="text-sm font-medium text-[#783B5A] flex items-start gap-2">
                {FeatureIcons.Trust}
                <span>
                  <span className="font-semibold">Benefit:</span> Start the day seeing the real
                  problem and the clear path through it.
                </span>
              </p>
            </div>

            <div className="space-y-4 rounded-xl border border-[#F3E7E7] bg-white/70 p-5 shadow-sm">
              <p className="text-base font-semibold text-[#0B4F6C] flex items-center gap-2">
                {FeatureIcons.AIGuide} Day · Insight & Action
              </p>
              <p className="text-sm flex items-start gap-2">
                <IoIosSearch className="text-xl text-[#783B5A]" />
                <span>
                  <span className="font-semibold text-[#0B4F6C]">AI-Guided Prompts</span> help you
                  unpack your feelings and find the smallest next step.{" "}
                  <span className="font-semibold text-[#0B4F6C]">Journaling Space</span> captures
                  the key insight.
                </span>
              </p>
              <p className="text-sm font-medium text-[#783B5A] flex items-start gap-2">
                {FeatureIcons.Trust}
                <span>
                  <span className="font-semibold">Benefit:</span> You move from swirling thoughts to
                  clear, actionable sentences in minutes.
                </span>
              </p>
            </div>

            <div className="space-y-4 rounded-xl border border-[#F3E7E7] bg-white/70 p-5 shadow-sm">
              <p className="text-base font-semibold text-[#0B4F6C] flex items-center gap-2">
                <PiPlant className="text-xl text-[#783B5A]" /> Evening · Body & Schedule
              </p>
              <p className="text-sm flex items-start gap-2">
                <IoIosCalendar className="text-xl text-[#783B5A]" />
                <span>
                  <span className="font-semibold text-[#0B4F6C]">Health Log</span> (water, food,
                  sleep) meets the{" "}
                  <span className="font-semibold text-[#0B4F6C]">
                    Hourly Schedule and To-Do List
                  </span>
                  . Everything is connected for whole-self planning.
                </span>
              </p>
              <p className="text-sm font-medium text-[#783B5A] flex items-start gap-2">
                {FeatureIcons.Trust}
                <span>
                  <span className="font-semibold">Benefit:</span> End the day knowing you showed up
                  for your mind, body, and schedule—not just your tasks.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <ClientSideOnly>
              <ImageCarousel
                images={dailySpreadImages}
                aspectRatio={4 / 5}
                maxWidth="max-w-md"
                title="THE UNIFIED DAILY SPREAD"
              />
            </ClientSideOnly>
          </div>

          <div className="mt-12 text-center">
            <PrimaryButton>Purchase Now</PrimaryButton>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMPARISON TABLE */}
      <section className="bg-[#FFF9F9] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#0B4F6C]">
            Stop using planners built for old habits.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#514241]">
            Generic planners assume you already have your emotional blocks figured out. The Saramatic
            Planner is built specifically to address the root of the problem: disconnection and
            self-criticism.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full divide-y divide-[#F3E7E7] text-sm">
              <thead className="bg-[#A3769F] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left font-semibold">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left font-semibold">
                    Generic Planner
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-semibold bg-[#783B5A]"
                  >
                    The Saramatic Way
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3E7E7] bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#F9EFF2]">
                    <td className="px-6 py-4 font-semibold text-[#0B4F6C]">{row.feature}</td>
                    <td className="px-6 py-4 text-[#514241]">{row.basic}</td>
                    <td className="px-6 py-4 font-medium text-[#783B5A] bg-[#F7C9C9]/50">
                      {row.saramatic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <PrimaryButton>Get the Saramatic Planner Today</PrimaryButton>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ & GUARANTEE */}
      <section
        id="final-cta"
        className="bg-gradient-to-b from-[#F3E7E7] to-[#F9EFF2] py-20"
      >
        <div className="mx-auto max-w-6xl px-6 md:grid md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0B4F6C] mb-6">
              Questions? We have answers.
            </h2>
            <ClientSideOnly>
              <FaqAccordion />
            </ClientSideOnly>
          </div>

          <div className="mt-12 md:mt-0">
            <h2 className="text-2xl font-bold text-[#0B4F6C] mb-6">
              Our Gentle Growth Promise.
            </h2>
            <div className="rounded-2xl bg-[#783B5A] p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                {FeatureIcons.Trust}
                <p className="text-lg font-semibold">14-Day Self-Trust Guarantee</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                We are confident the Saramatic Way will help you move through resistance with more
                self-compassion than any planner you've ever used. If you follow the daily Light &
                Shadow practice for 14 days and don't feel a difference in your emotional clarity,
                contact us for a full refund.
              </p>
              <div className="mt-5">
                <a
                  href={primaryCtaHref}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0B4F6C] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#A3769F] transform hover:scale-[1.01] duration-300"
                >
                  <IoIosArrowForward className="mr-2" /> Start Your Gentle Path Now
                </a>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-[#514241]">
              <p>
                **Digital Download** - Compatible with Goodnotes, Notability, and other PDF
                annotation apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B4F6C] py-8 text-center text-xs text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p>&copy; {new Date().getFullYear()} Saramatic. All rights reserved.</p>
          <p className="mt-2 text-[#F7C9C9]">
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
