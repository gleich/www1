import Route from '@components/Route'

const Copyright = (): JSX.Element => (
  <>
    <style jsx>
      {`
        .container {
          display: inline-block;
          border: 1px solid var(--border);
          padding: 10px;
        }

        .repoLink {
          padding-left: 30px;
        }

        @media (prefers-color-scheme: light) {
          .container {
            border-color: var(--border);
          }
        }
      `}
    </style>
    <div className="container">
      <p>
        &copy; 2004-{new Date().getFullYear()} Matt Gleich{' '}
        <span className="repoLink">
          <Route href="https://github.com/gleich/www1">gleich/www1</Route>
        </span>
      </p>
    </div>
  </>
)

export default Copyright
