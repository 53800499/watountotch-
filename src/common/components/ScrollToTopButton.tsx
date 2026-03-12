import { Button } from './Button'

export const ScrollToTopButton = () => {
  return (
    <Button className="scroll-to-top" id="scrollToTop" aria-label="Scroll to top">
        <svg viewBox="0 0 24 24">
            <path d="M7 14l5-5 5 5z"></path>
        </svg>
    </Button>
  )
}
