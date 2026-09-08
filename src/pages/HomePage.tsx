import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import homeBackground from '../assets/home_background.jpg'
import onigiri from '../assets/jsa_onigiri.jpg'
import springFestival from '../assets/optimized/jsa_springfes.jpg'
import bascomHill from '../assets/optimized/bascom_hill.jpg'
import Icon from '../components/Icon'
import JoinLink from '../components/JoinLink'
import UpcomingEvents from '../components/UpcomingEvents'
import { partners } from '../data/partners'
import { siteLinks } from '../config/siteLinks'

const elfsightScriptId = 'elfsight-platform-script'
const instagramUrl = siteLinks.instagram

function HomePage() {
  const { t } = useTranslation()
  const [showFeed, setShowFeed] = useState(false)
  const [feedError, setFeedError] = useState(false)
  const [feedReady, setFeedReady] = useState(false)
  const feedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showFeed || !feedRef.current) return
    const frame = feedRef.current
    const timeout = window.setTimeout(() => {
      setFeedError(true)
      observer.disconnect()
    }, 12000)
    const observer = new MutationObserver(() => {
      if (frame.querySelector('img, video, iframe')) {
        setFeedReady(true)
        window.clearTimeout(timeout)
        observer.disconnect()
      }
    })
    observer.observe(frame, { childList: true, subtree: true })
    let script = document.getElementById(elfsightScriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = elfsightScriptId
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      script.onerror = () => {
        setFeedError(true)
        window.clearTimeout(timeout)
        script?.remove()
      }
      document.body.appendChild(script)
    }
    return () => {
      window.clearTimeout(timeout)
      observer.disconnect()
      if (script) script.onerror = null
    }
  }, [showFeed])


  return (
    <div className="home-page home-relaunch">
      <section className="home-intro" aria-labelledby="home-title">
        <div className="home-intro-copy">
          <p className="section-kicker home-kicker"><span className="status-dot" />{t('home.eyebrow')}</p>
          <h1 id="home-title">{t('home.titleLead')} <span>{t('home.titleAccent')}</span></h1>
          <p className="hero-supporting">{t('home.supportingLine')}</p>
          <p className="home-description">{t('home.description')}</p>
          <div className="home-actions">
            <Link to="/events" className="cta-link home-primary">{t('home.ctaEvents')}<Icon name="arrow" /></Link>
            <JoinLink className="cta-link cta-outline" />
          </div>
          <p className="home-welcome">{t('involvement.joinNote')}</p>
        </div>
        <figure className="home-photo">
          <img src={homeBackground} alt={t('home.photoAlt')} width="1080" height="810" fetchPriority="high" />
          <div className="photo-greeting" aria-hidden="true"><span lang="ja">こんにちは。</span><span>Hello, Madison.</span></div>
          <figcaption><span>{t('home.photoCaption')}</span><span>JSA / UW–MADISON</span></figcaption>
        </figure>
      </section>

      <section aria-labelledby="upcoming-title">
        <div className="home-section-heading"><div><p className="section-kicker">{t('community.nextTogether')}</p><h2 id="upcoming-title">{t('community.upcomingEvents')}</h2></div><Link className="text-link" to="/events">{t('community.viewAllEvents')}<Icon name="arrow" /></Link></div>
        <UpcomingEvents />
      </section>

      <section className="home-about community-panel" aria-labelledby="home-about-title">
        <div><p className="section-kicker">{t('community.whatIsJsa')}</p><h2 id="home-about-title">{t('community.homeAboutTitle')}</h2><p>{t('community.purposeBody')}</p></div>
        <Link className="text-link" to="/about">{t('community.discoverPurpose')}<Icon name="arrow" /></Link>
      </section>

      <section className="info-card community-panel student-teaser" aria-labelledby="student-teaser-title">
        <div><p className="section-kicker">{t('studentResources.title')}</p><h2 id="student-teaser-title">{t('community.newToUw')}</h2><p>{t('community.newToUwBody')}</p></div>
        <Link className="cta-link home-primary" to="/resources/japanese-students">{t('community.connectStudents')}<Icon name="arrow" /></Link>
      </section>

      <section aria-labelledby="get-involved-title">
        <div className="home-section-heading"><h2 id="get-involved-title">{t('involvement.title')}</h2><JoinLink /></div>
        <div className="involvement-grid">
          <Link className="activity-card" to="/events"><Icon name="culture" /><h3>{t('involvement.attendTitle')}</h3><p>{t('involvement.attendBody')}</p><span className="activity-action">{t('home.ctaEvents')}<Icon name="arrow" /></span></Link>
          <a className="activity-card" href={siteLinks.join} target="_blank" rel="noreferrer" aria-label={t('involvement.joinAccessible')}><Icon name="conversation" /><h3>{t('involvement.communityTitle')}</h3><p>{t('involvement.communityBody')}</p><span className="activity-action">{t('nav.join')}<Icon name="external" /></span></a>
          <Link className="activity-card" to="/contact"><Icon name="career" /><h3>{t('involvement.officerTitle')}</h3><p>{t('involvement.officerBody')}</p><span className="activity-action">{t('involvement.officerAction')}<Icon name="arrow" /></span></Link>
          <Link className="activity-card" to="/sponsorship"><Icon name="globe" /><h3>{t('involvement.collaborateTitle')}</h3><p>{t('involvement.collaborateBody')}</p><span className="activity-action">{t('involvement.collaborateAction')}<Icon name="arrow" /></span></Link>
        </div>
      </section>

      <section className="info-card community-panel" aria-labelledby="home-careers-title"><div><p className="section-kicker">{t('nav.careers')}</p><h2 id="home-careers-title">{t('community.careersTitle')}</h2><p>{t('community.careersBody')}</p></div><Link className="text-link" to="/careers">{t('community.exploreCareers')}<Icon name="arrow" /></Link></section>

      <section aria-labelledby="gallery-title">
        <div className="home-section-heading"><div><p className="section-kicker">{t('community.pastMoments')}</p><h2 id="gallery-title">{t('community.galleryTitle')}</h2></div></div>
        <div className="community-gallery">
          {[{ src: onigiri, alt: 'onigiriAlt' }, { src: springFestival, alt: 'festivalAlt' }, { src: bascomHill, alt: 'campusAlt' }].map((photo) => <figure key={photo.alt}><img src={photo.src} alt={t(`home.${photo.alt}`)} loading="lazy" width="480" height="320" /><figcaption>{t(`home.${photo.alt}`)}</figcaption></figure>)}
        </div>
      </section>

      <section className="home-partners" aria-labelledby="home-partners-title"><div className="home-section-heading"><h2 id="home-partners-title">{t('nav.partners')}</h2><Link className="text-link" to="/partners">{t('community.viewPartners')}<Icon name="arrow" /></Link></div><ul className="partner-name-list">{partners.map((partner) => <li key={partner.key}><a href={partner.href} target="_blank" rel="noreferrer">{t(`partners.items.${partner.key}.name`)}<Icon name="external" width="14" height="14" /></a></li>)}</ul></section>

      <section className="home-instagram" aria-labelledby="instagram-title">
        <div className="home-section-heading">
          <div><p className="section-kicker">{t('home.instagramEyebrow')}</p><h2 id="instagram-title">{t('home.instagramTitle')}</h2></div>
          <a href={instagramUrl} className="text-link" target="_blank" rel="noreferrer">@jsamadison<Icon name="external" width="17" height="17" /></a>
        </div>
        {showFeed && !feedError && <div ref={feedRef} className={`instagram-card${feedReady ? '' : ' instagram-pending'}`} aria-hidden={!feedReady}><div className="instagram-feed-frame"><div className="elfsight-app-2e2ea4a1-8e3f-4680-9b96-6e9bb86fd82f instagram-feed" /></div></div>}
        {showFeed && !feedReady && !feedError && <p className="instagram-loading" role="status">{t('home.feedLoading')}</p>}
        <div className="instagram-caption">
          <p>{feedError ? t('home.feedError') : t('home.instagramDescription')}</p>
          {showFeed ? <a href={instagramUrl} className="text-link" target="_blank" rel="noreferrer">{t('home.openInstagram')}<Icon name="external" width="16" height="16" /></a> : <button type="button" className="text-link" onClick={() => setShowFeed(true)}>{t('home.loadFeed')}<Icon name="arrow" width="17" height="17" /></button>}
        </div>
      </section>
    </div>
  )
}

export default HomePage
