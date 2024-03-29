import Center from '@components/Center'
import Meta from '@components/Meta'
import Route from '@components/Route'
import { NextPage } from 'next'

const About: NextPage = () => (
  <>
    <Meta title="About Me" description="A little bit about me" />
    <style jsx>
      {`
        h1 {
          font-size: 6rem;
        }

        main {
          margin: 10vh 5vw;
          margin-bottom: 5vh;
        }

        .body {
          max-width: 800px;
        }

        .body > ul {
          margin-top: 30px;
        }

        li > ul {
          list-style: '';
        }

        li > ul > li {
          margin-left: 35px;
          margin-top: 10px;
        }

        .body > ul > li {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid var(--border);
        }
      `}
    </style>
    <Center root>
      <main>
        <h3>Hey, I&apos;m</h3>
        <h1>Matt Gleich</h1>
        <div className="body">
          <p>
            a developer from Goffstown New Hampshire in the USA. Below are some
            questions that I think best describe me:
          </p>
          <ul>
            <li>
              What do you like to do outside of programming?
              <ul>
                <li>
                  Photography: Before programming, photography was my passion in
                  life. I would spend hours every day in my yard taking pictures
                  of everything from water droplets to dragonflies. I mainly do
                  nature and travel photography taking macro pictures (handheld
                  ftw) and landscapes.
                </li>
                <li>
                  Cycling has always been a huge passion of mine as I feel like
                  it&apos;s the freest form of exploration. You can go almost
                  anywhere on your bike, the only thing holding you back is your
                  ability to put in the leg power. I mainly do road cycling.
                </li>
              </ul>
            </li>
            <li>
              Why did you get into programming?
              <ul>
                <li>
                  I&apos;ve always had a fascination with technology. I simply
                  saw programming as an extension of my regular love for
                  technology. I find the fact that I can create so many things
                  for free and with little to no equipment super freeing. The
                  fact that I can work with tons of cool people from all around
                  the world so easily is truly incredible.
                </li>
              </ul>
            </li>
            <li>
              When do you find the time to code?
              <ul>
                <li>
                  It depends on if school is in or out of session. During the
                  school year, I mainly code during little bits of free time
                  during the day or late at night. When school is out I mainly
                  code later in the day or a whole day one or two times a week.
                </li>
              </ul>
            </li>
            <li>
              What are you working on right now?
              <ul>
                <li>
                  Right now I&apos;m learning about embedded development in rust
                  and more things in the hardware world. Check out some of my{' '}
                  <Route href="https://github.com/gleich/pcbs">pcbs</Route> and
                  the{' '}
                  <Route href="https://github.com/gleich/is31fl3731/">
                    IS31FL3731 IC driver
                  </Route>{' '}
                  I&apos;m writing in rust.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </Center>
  </>
)

export default About
