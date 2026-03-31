import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  HeartHandshake,
  MapPin,
  Sparkles,
  Waves,
} from 'lucide-react';
import { retreatSlides, type SlideItem } from './retreatContent';

const asset = (name: string) => `${import.meta.env.BASE_URL}retreat-assets/${name}`;

const slideNumberFromQuery = (): number | null => {
  if (typeof window === 'undefined') return null;
  const value = Number(new URLSearchParams(window.location.search).get('slide'));
  if (!Number.isFinite(value)) return null;
  if (value < 1 || value > retreatSlides.length) return null;
  return value;
};

const SlideFrame = ({
  children,
  number,
}: {
  children: React.ReactNode;
  number: number;
}) => (
  <section className="slide-shell">
    <div className="slide-page">
      <div className="slide-no">{String(number).padStart(2, '0')}</div>
      {children}
    </div>
  </section>
);

const CoverSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'cover' }> }) => (
  <div className="slide surface-hero">
    <div className="hero-copy">
      <div className="eyebrow">{slide.kicker}</div>
      <h1>
        {slide.title.split('\n').map((line) => (
          <span key={line} className="line">
            {line}
          </span>
        ))}
      </h1>
      <p className="lede">{slide.subtitle}</p>
      <div className="stat-row">
        {slide.stats.map((stat) => (
          <div key={stat.value} className="stat-card">
            <div className="value">{stat.value}</div>
            <div className="label">
              {stat.label.split('\n').map((line) => (
                <span key={line} className="line">
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="hero-visual">
      <img src={asset('hotel.jpg')} alt="Retreat hotel view" />
      <div className="hero-badge">
        <span>Corporate retreats</span>
        <span>Strategy + recovery + team cohesion</span>
      </div>
    </div>
  </div>
);

const OutcomesSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'outcomes' }> }) => (
  <div className="slide">
    <div className="title-block">
      <div className="eyebrow">Outcome Design</div>
      <h2>{slide.title}</h2>
      <p>{slide.intro}</p>
    </div>
    <div className="grid-four">
      {slide.items.map((item, index) => (
        <article key={item.title} className="outcome-card">
          <div className="chip">{`0${index + 1}`}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  </div>
);

const ProcessSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'process' }> }) => (
  <div className="slide">
    <div className="title-block compact">
      <div className="eyebrow">Process Blueprint</div>
      <h2>{slide.title}</h2>
      <p>{slide.request}</p>
    </div>
    <div className="timeline-grid">
      {slide.steps.map((item) => (
        <article key={item.step} className="timeline-card">
          <h3>{item.step}</h3>
          <p><strong>Потребность:</strong> {item.need}</p>
          <p><strong>Как:</strong> {item.method}</p>
          <p><strong>Результат:</strong> {item.result}</p>
        </article>
      ))}
    </div>
  </div>
);

const PackageSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'package' }> }) => (
  <div className="slide surface-split">
    <div className="split-left">
      <div className="title-block compact">
        <div className="eyebrow">Base Package</div>
        <h2>{slide.title}</h2>
      </div>
      <ul className="check-list">
        {slide.base.map((item) => (
          <li key={item}>
            <CheckCircle2 size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="note">{slide.note}</p>
    </div>
    <div className="split-right warm-panel">
      <div className="icon-title">
        <MapPin size={18} />
        <span>География проведения</span>
      </div>
      <div className="geo-grid">
        {slide.geo.map((place) => (
          <div key={place} className="geo-pill">
            {place}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperiencesSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'experiences' }> }) => {
  const visuals = [asset('hiking.jpg'), asset('sauna.jpg'), asset('gala.jpg')];
  const icons = [Compass, Waves, Sparkles];

  return (
    <div className="slide">
      <div className="title-block compact">
        <div className="eyebrow">Signature Experiences</div>
        <h2>{slide.title}</h2>
      </div>
      <div className="experience-grid">
        {slide.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <article key={item.name} className="experience-card">
              <img src={visuals[index]} alt={item.name} />
              <div className="experience-copy">
                <div className="icon-title">
                  <Icon size={18} />
                  <span>{item.duration}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

const ProblemsSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'problems' }> }) => (
  <div className="slide surface-dark">
    <div className="title-block compact inverse">
      <div className="eyebrow">Pain to Design</div>
      <h2>{slide.title}</h2>
    </div>
    <div className="problem-stack">
      {slide.problems.map((item) => (
        <article key={item.problem} className="problem-card">
          <div className="problem-label">Проблема</div>
          <p className="problem-text">{item.problem}</p>
          <div className="problem-label accent">Решение</div>
          <p className="solution-text">{item.solution}</p>
        </article>
      ))}
    </div>
  </div>
);

const PricingSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'pricing' }> }) => (
  <div className="slide surface-money">
    <div className="money-card">
      <div className="icon-title">
        <CircleDollarSign size={18} />
        <span>Pricing Framework</span>
      </div>
      <h2>{slide.title}</h2>
      <p className="price-callout">{slide.price}</p>
      <ul className="bullet-list">
        {slide.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p className="note">{slide.note}</p>
    </div>
  </div>
);

const TeamSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'team' }> }) => (
  <div className="slide">
    <div className="title-block compact">
      <div className="eyebrow">Core Team</div>
      <h2>{slide.title}</h2>
    </div>
    <div className="team-grid">
      {slide.people.map((person) => (
        <article key={person.name} className="team-card">
          <img src={person.image} alt={person.name} />
          <div className="team-copy">
            <h3>{person.name}</h3>
            <div className="role">{person.role}</div>
            <ul className="bullet-list">
              {person.bio.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const ClientsSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'clients' }> }) => (
  <div className="slide surface-cream">
    <div className="title-block compact">
      <div className="eyebrow">Social Proof</div>
      <h2>{slide.title}</h2>
    </div>
    <div className="clients-grid">
      <div className="logo-panel">
        {slide.logos.map((logo) => (
          <img key={logo} src={logo} alt="Client logo" />
        ))}
      </div>
      <div className="names-panel">
        {slide.names.map((name) => (
          <div key={name} className="name-pill">
            {name}
          </div>
        ))}
      </div>
      <div className="quote-panel">
        <HeartHandshake size={22} />
        <p>{slide.quote}</p>
      </div>
    </div>
  </div>
);

const ReviewsSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'reviews' }> }) => (
  <div className="slide">
    <div className="title-block compact">
      <div className="eyebrow">Testimonials</div>
      <h2>{slide.title}</h2>
    </div>
    <div className="reviews-grid">
      {slide.reviews.map((review) => (
        <article key={review.author + review.role} className="review-card">
          <img src={review.image} alt={review.author} />
          <div className="review-copy">
            <p>{review.text}</p>
            <div className="review-author">{review.author}</div>
            <div className="role">{review.role}</div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const CtaSlide = ({ slide }: { slide: Extract<SlideItem, { kind: 'cta' }> }) => (
  <div className="slide surface-cta">
    <div className="cta-card">
      <div className="eyebrow">Call to Action</div>
      <h2>{slide.title}</h2>
      <p>{slide.body}</p>
      <div className="cta-columns">
        <div>
          <div className="icon-title">
            <ArrowRight size={18} />
            <span>Контакты</span>
          </div>
          <ul className="bullet-list">
            {slide.contacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="icon-title">
            <Sparkles size={18} />
            <span>Видео-отчёты</span>
          </div>
          <ul className="bullet-list">
            {slide.videos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SlideRenderer = ({ slide }: { slide: SlideItem }) => {
  switch (slide.kind) {
    case 'cover':
      return <CoverSlide slide={slide} />;
    case 'outcomes':
      return <OutcomesSlide slide={slide} />;
    case 'process':
      return <ProcessSlide slide={slide} />;
    case 'package':
      return <PackageSlide slide={slide} />;
    case 'experiences':
      return <ExperiencesSlide slide={slide} />;
    case 'problems':
      return <ProblemsSlide slide={slide} />;
    case 'pricing':
      return <PricingSlide slide={slide} />;
    case 'team':
      return <TeamSlide slide={slide} />;
    case 'clients':
      return <ClientsSlide slide={slide} />;
    case 'reviews':
      return <ReviewsSlide slide={slide} />;
    case 'cta':
      return <CtaSlide slide={slide} />;
    default:
      return null;
  }
};

export default function RetreatDeck() {
  const single = slideNumberFromQuery();
  const slides = single ? [retreatSlides[single - 1]] : retreatSlides;

  return (
    <div className="deck-root">
      {!single && (
        <div className="deck-toolbar">
          <div>
            <strong>Strategy & Team Retreats</strong>
            <span>Deck view</span>
          </div>
          <div>
            <span>{retreatSlides.length} slides</span>
            <span>Use `?slide=1` ... `?slide=10` for PNG export</span>
          </div>
        </div>
      )}
      <main className="deck-stack">
        {slides.map((slide, index) => (
          <React.Fragment key={`${slide.kind}-${index}`}>
            <SlideFrame number={single ?? index + 1}>
              <SlideRenderer slide={slide} />
            </SlideFrame>
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
