import { nanoid } from 'nanoid'
import Route from '@components/Route'
import { motion } from 'framer-motion'

interface RouteEntry {
  description: string
  href?: string
}

const Routes = (): JSX.Element => {
  const routes: Record<string, RouteEntry> = {
    about: { description: 'Get to know me' },
    projects: {
      description: 'A showcase of some of my best programming projects',
      href: 'https://github.com/gleich?tab=repositories',
    },
    skills: {
      description:
        'My skills in the world of programming, photography, and design',
    },
    photography: {
      description: 'My photography work',
      href: 'https://lightroom.adobe.com/shares/cce6349aee1b4687a2ebef28031dd37f',
    },
  }

  return (
    <>
      <style jsx global>
        {`
          .indexRoutesContainer {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-right: 100px;
          }

          .indexRoutes {
            margin-top: 50px;
            display: flex;
          }

          .indexRoute {
            white-space: nowrap;
            text-align: left;
            width: 60px;
            transform: rotate(-30deg);
            text-orientation: sideways-right;
          }

          .indexRouteIcon {
            width: 19px;
            height: auto;
            margin-right: 5px;
          }

          .indexRoute > div > a {
            font-size: 1.4rem;
          }

          @media screen and (max-width: 1000px) {
            .indexRoutesContainer {
              margin-top: 20px;
            }
          }
        `}
      </style>
      <div className="indexRoutesContainer">
        <div className="indexRoutes">
          {Object.keys(routes).map((r: string) => (
            <motion.div
              initial={{ marginRight: '25px', opacity: '0%' }}
              animate={{ marginRight: '0px', opacity: '100%' }}
              transition={{ duration: 1.5 }}
              key={nanoid()}
            >
              <div className="indexRoute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="indexRouteIcon"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <Route href={routes[r].href ? routes[r].href ?? '' : '/' + r}>
                  {r}
                </Route>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Routes
