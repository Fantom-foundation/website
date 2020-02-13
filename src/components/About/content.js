import React from "react"
import { aboutData } from "./Data"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"
const Content = () => {
  const intl = useIntl()
  return (
    <div className="container section">
      {aboutData.map((aboutContent, index) => {
        const {
          id,
          spanOne,
          content,
          spanTwo,
          contentTwo,
          contentBefore,
          spanAfter,
          spanAfterTwo,
          list,
        } = aboutContent
        return (
          <div
            className="introduction section wow fadeInUp"
            data-wow-duration="600"
            key={id}
          >
            <h4>
              <FormattedMessage
                id={`whatisFantomPage.aboutData.${index}.heading`}
              />
            </h4>
            <div>
              {spanOne && (
                <span>
                  {" "}
                  {intl.formatMessage({
                    id: `whatisFantomPage.aboutData.${index}.spanOne`,
                  })}{" "}
                </span>
              )}
              {content &&
                intl.formatMessage({
                  id: `whatisFantomPage.aboutData.${index}.content`,
                })}
              {spanTwo && (
                <span>
                  {" "}
                  {intl.formatMessage({
                    id: `whatisFantomPage.aboutData.${index}.spanTwo`,
                  })}{" "}
                </span>
              )}
              {contentTwo &&
                intl.formatMessage({
                  id: `whatisFantomPage.aboutData.${index}.contentTwo`,
                })}
              {contentBefore &&
                intl.formatMessage({
                  id: `whatisFantomPage.aboutData.${index}.contentBefore`,
                })}
              {spanAfter &&
                intl.formatMessage({
                  id: `whatisFantomPage.aboutData.${index}.spanAfter`,
                })}
              {spanAfterTwo &&
                intl.formatMessage({
                  id: `whatisFantomPage.aboutData.${index}.spanAfterTwo`,
                })}
            </div>
            <div>
              {list && (
                <ul>
                  {list.map((listContent, i) => {
                    const { lid, li } = listContent
                    return (
                      <li key={lid}>
                        <FormattedMessage
                          id={`whatisFantomPage.aboutData.${index}.list.${i}.li`}
                        />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Content
