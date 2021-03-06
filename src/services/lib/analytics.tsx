export const GA_TRACKING_ID = 'GTM-NZFXM9Z'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: any, category: any, label: any, value: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
