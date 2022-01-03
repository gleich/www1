import { motion } from 'framer-motion'

const Logo = (): JSX.Element => {
  const pathInitial = { pathLength: 0 }
  const pathAnimate = { pathLength: 1 }
  function getDuration(index: number): Record<string, number> {
    return { duration: index ** 2 * 3 }
  }
  return (
    <>
      <style jsx global>
        {`
          .logoPath {
            stroke: var(--foreground);
          }

          .logoPathName {
            stroke-width: 2px;
          }

          @media screen and (max-width: 1000px) {
            .logo {
              transform: scale(0.7);
            }
          }

          @media (prefers-color-scheme: light) {
            .logoPathRings {
              stroke-width: 4px;
            }
          }
        `}
      </style>
      <div className="logo">
        <motion.div
          transition={{
            duration: 1,
          }}
        >
          <motion.svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{
              rotate: -45,
            }}
            animate={{
              rotate: 0,
            }}
            transition={{
              duration: 6,
            }}
          >
            <motion.g
              filter="url(#filter0_d_52_198)"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 50,
                delay: 20,
                ease: 'linear',
              }}
            >
              <motion.path
                d="M94.2498 43.2498H131.704L110.715 64.2382L79.5867 77.132L91.1216 45.4401C91.3845 44.7179 91.6633 44.006 91.9573 43.3047C92.7169 43.2682 93.4812 43.2498 94.2498 43.2498ZM133.704 41.2498H94.2498C93.7876 41.2498 93.3269 41.2562 92.8678 41.2689C103.157 19.6456 128.402 8.9927 151.362 17.3495L155.938 19.0151L133.704 41.2498ZM115.544 62.2382L134.532 43.2498H161.386L115.544 62.2382ZM166.214 41.2498H136.532L158.012 19.7698L189.98 31.4054L166.214 41.2498ZM111.848 65.9337L166.612 43.2498H222.523L278.251 63.5334L322.566 107.848L345.25 162.612V218.523L324.966 274.251L280.652 318.566L225.888 341.25H169.977L114.248 320.966L69.9337 276.651L47.2498 221.888V165.977L67.5334 110.248L111.848 65.9337ZM217.028 41.2498H171.44L192.762 32.4179L217.028 41.2498ZM274.905 60.187L228.37 43.2498H257.968L274.905 60.187ZM255.968 41.2498H222.875L195.497 31.285L231.21 16.4923L255.968 41.2498ZM279.352 61.8056L260.796 43.2498H295.808L307.78 72.1527L279.352 61.8056ZM294.98 41.2498H258.796L233.21 15.6639L233.466 15.558C257.447 5.62456 284.941 17.0127 294.874 40.9942L294.98 41.2498ZM310.329 73.0806L297.973 43.2498H298.25C322.683 43.2498 342.762 61.8946 345.036 85.7329C344.608 85.5639 344.178 85.4003 343.743 85.2422L310.329 73.0806ZM343.059 87.1216C343.782 87.3845 344.494 87.6632 345.195 87.9573C345.231 88.7169 345.25 89.4812 345.25 90.2498V127.704L324.261 106.715L311.368 75.5867L343.059 87.1216ZM347.25 129.704V90.2498C347.25 89.7876 347.243 89.3269 347.231 88.8678C368.854 99.157 379.507 124.402 371.15 147.362L369.484 151.938L347.25 129.704ZM326.261 111.544L345.25 130.532V157.386L326.261 111.544ZM347.25 162.214V132.532L368.73 154.012L357.094 185.98L347.25 162.214ZM347.25 213.028V167.44L356.082 188.762L347.25 213.028ZM347.25 218.875L357.215 191.497L372.007 227.21L347.25 251.968V218.875ZM347.25 254.796L372.836 229.21L372.941 229.466C382.875 253.447 371.487 280.941 347.505 290.874L347.25 290.98V254.796ZM345.25 256.796V291.808L316.347 303.78L326.694 275.352L345.25 256.796ZM315.419 306.329L345.25 293.973V294.25C345.25 318.683 326.605 338.762 302.767 341.036C302.936 340.608 303.099 340.178 303.257 339.743L315.419 306.329ZM323.348 278.698L313.841 304.818L285.48 316.566L323.348 278.698ZM281.784 320.261L312.913 307.368L301.378 339.059C301.115 339.782 300.836 340.494 300.542 341.195C299.783 341.231 299.018 341.25 298.25 341.25H260.796L281.784 320.261ZM231.114 341.25L276.956 322.261L257.968 341.25H231.114ZM226.286 343.25H255.968L234.488 364.73L202.519 353.094L226.286 343.25ZM199.784 354.227L232.927 366.29L229.484 369.734C211.129 388.088 181.37 388.088 163.016 369.734L162.82 369.538L199.784 354.227ZM197.002 353.215L161.289 368.007L136.532 343.25H169.624L197.002 353.215ZM133.704 343.25L159.289 368.836L159.034 368.942C135.052 378.875 107.559 367.487 97.6254 343.505L97.5196 343.25H133.704ZM164.129 341.25H134.532L117.595 324.313L164.129 341.25ZM113.148 322.694L131.704 341.25H96.6912L84.7192 312.347L113.148 322.694ZM71.9337 281.48L109.801 319.348L83.6811 309.841L71.9337 281.48ZM68.2381 277.784L81.132 308.913L49.4401 297.378C48.7179 297.115 48.006 296.836 47.3047 296.542C47.2682 295.783 47.2498 295.018 47.2498 294.25V256.796L68.2381 277.784ZM45.2498 294.25C45.2498 294.712 45.2562 295.173 45.2689 295.632C23.6456 285.343 12.9927 260.098 21.3495 237.137L23.0151 232.561L45.2498 254.796V294.25ZM45.2498 251.968L23.7698 230.488L35.4054 198.519L45.2498 222.286V251.968ZM34.2725 195.784L22.2094 228.927L18.766 225.484C0.411343 207.129 0.411337 177.37 18.766 159.016L18.9616 158.82L34.2725 195.784ZM45.2498 217.059L36.4179 195.737L45.2498 171.472V217.059ZM45.2498 165.624L35.285 193.002L20.4923 157.289L45.2498 132.532V165.624ZM64.187 113.595L47.2498 160.129V130.532L64.187 113.595ZM65.8056 109.148L47.2498 127.704V92.6912L76.1528 80.7192L65.8056 109.148ZM77.0806 78.1701L47.2498 90.5264V90.2498C47.2498 65.8161 65.8946 45.737 89.7329 43.464C89.5639 43.8911 89.4003 44.3218 89.2422 44.7561L77.0806 78.1701ZM192.715 30.2725L159.572 18.2094L163.016 14.766C181.37 -3.58866 211.129 -3.58866 229.484 14.766L229.679 14.9616L192.715 30.2725ZM19.6639 155.289L19.558 155.034C9.62456 131.052 21.0127 103.559 44.9942 93.6254L45.2498 93.5196V129.704L19.6639 155.289ZM94.5264 341.25H94.2498C69.816 341.25 49.737 322.605 47.464 298.767C47.8911 298.936 48.3218 299.099 48.7561 299.257L82.1701 311.419L94.5264 341.25ZM299.632 343.231C289.343 364.854 264.098 375.507 241.137 367.15L236.561 365.484L258.796 343.25H298.25C298.712 343.25 299.173 343.243 299.632 343.231ZM370.29 155.572L373.734 159.016C392.088 177.37 392.088 207.129 373.734 225.484L373.538 225.679L358.227 188.715L370.29 155.572ZM69.1519 105.801L78.659 79.6811L107.02 67.9337L69.1519 105.801ZM47.2498 253.968V227.114L66.2381 272.956L47.2498 253.968ZM199.737 352.082L175.472 343.25H221.059L199.737 352.082ZM345.25 253.968L328.313 270.905L345.25 224.37V253.968ZM308.818 74.6589L320.566 103.02L282.698 65.1519L308.818 74.6589Z"
                className="logoPath logoPathRings"
                strokeWidth="1"
                initial={pathInitial}
                animate={pathAnimate}
                transition={getDuration(5)}
              />
            </motion.g>
            <motion.path
              d="M144.1 182.528C144.1 182.336 144.292 181.52 144.676 180.08C145.06 178.544 145.636 176.576 146.404 174.176C147.172 171.776 147.94 169.712 148.708 167.984C151.396 162.896 154.852 160.352 159.076 160.352C162.244 160.352 164.932 161.408 167.14 163.52C169.348 165.536 170.692 168.272 171.172 171.728C176.74 164.144 183.604 160.352 191.764 160.352C195.604 160.352 198.964 161.36 201.844 163.376C204.724 165.296 206.404 168.512 206.884 173.024C212.644 164.576 219.844 160.352 228.484 160.352C232.612 160.352 236.164 161.504 239.14 163.808C242.116 166.016 243.604 169.856 243.604 175.328C243.604 181.184 240.676 191.888 234.82 207.44C233.092 212.624 232.228 216.224 232.228 218.24C232.228 221.024 233.284 222.416 235.396 222.416C240.772 222.416 245.236 216.416 248.788 204.416C249.076 203.264 249.316 202.592 249.508 202.4C249.796 202.112 250.372 201.968 251.236 201.968C252.676 201.968 253.396 202.448 253.396 203.408C253.396 203.696 253.204 204.56 252.82 206C252.436 207.44 251.764 209.312 250.804 211.616C249.844 213.824 248.692 215.984 247.348 218.096C246.004 220.112 244.228 221.888 242.02 223.424C239.908 224.864 237.604 225.584 235.108 225.584C231.748 225.584 229.06 224.48 227.044 222.272C225.124 220.064 224.164 217.328 224.164 214.064C224.164 211.952 224.932 208.88 226.468 204.848C232.036 188.912 234.82 178.304 234.82 173.024C234.82 166.688 232.612 163.52 228.196 163.52C220.708 163.52 213.94 168.704 207.892 179.072C206.836 180.896 205.636 184.352 204.292 189.44C204.004 190.496 203.62 192.08 203.14 194.192C202.66 196.208 202.276 197.744 201.988 198.8L196.228 221.84C195.268 224.336 193.54 225.584 191.044 225.584C189.7 225.584 188.692 225.2 188.02 224.432C187.348 223.664 187.012 222.8 187.012 221.84C187.012 221.36 187.156 220.688 187.444 219.824L196.804 182.384C197.668 178.448 198.1 175.328 198.1 173.024C198.1 166.688 195.892 163.52 191.476 163.52C183.988 163.52 177.22 168.704 171.172 179.072C170.116 180.896 168.916 184.352 167.572 189.44C167.38 190.496 166.996 192.08 166.42 194.192C165.844 196.208 165.46 197.744 165.268 198.8L159.508 221.84C158.548 224.336 156.82 225.584 154.324 225.584C152.98 225.584 151.972 225.2 151.3 224.432C150.628 223.664 150.292 222.8 150.292 221.84C150.292 221.36 150.436 220.688 150.724 219.824L161.524 176.624C162.196 173.936 162.532 171.488 162.532 169.28C162.532 165.44 161.284 163.52 158.788 163.52C156.676 163.52 154.852 164.96 153.316 167.84C151.876 170.72 150.436 174.992 148.996 180.656C148.612 182.192 148.276 183.152 147.988 183.536C147.796 183.824 147.22 183.968 146.26 183.968C144.82 183.968 144.1 183.488 144.1 182.528Z"
              className="logoPath logoPathName"
              initial={{ opacity: '0%', filter: 'blur(4px)' }}
              animate={{ opacity: '100%', filter: 'blur(0px)' }}
              transition={{ ...getDuration(2), delay: 4 }}
            />
            <defs>
              <filter
                id="filter0_d_52_198"
                x="0"
                y="0"
                width="392.5"
                height="392.5"
                filterUnits="userSpaceOnUse"
                color-interpolationfilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_52_198"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_52_198"
                  result="shape"
                />
              </filter>
            </defs>
          </motion.svg>
        </motion.div>
      </div>
    </>
  )
}

export default Logo
